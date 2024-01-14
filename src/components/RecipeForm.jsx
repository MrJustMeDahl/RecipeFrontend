import React, { useState } from 'react';
import recipeFacade from '../facade/recipeFacade';

const RecipeForm = ( ) => {
    const [recipe, setRecipe] = useState(null);
    const [name, setName] = useState(recipe ? recipe.name : '');
    const [description, setDescription] = useState(recipe ? recipe.description : '');
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : '');
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : '');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !ingredients || !instructions) {
            setError('Please provide name, description, ingredients, and instructions');
        } else {
            setError('');
            setRecipe({ name, description, ingredients, instructions });
        }
        recipeFacade.addRecipe({ name, description, ingredients, instructions });        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <input
                    type="text"
                    placeholder="Recipe Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Recipe Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Recipe Ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Recipe Instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RecipeForm;