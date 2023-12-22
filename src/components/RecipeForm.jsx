import React, { useState, useEffect } from 'react';
import recipeFacade from '../facade/recipeFacade';
import loginFacade from "../facade/loginFacade";

const RecipeForm = () => {
    const URL = "http://localhost:7070/api/recipes";

    const [recipe, setRecipe] = useState(null);
    const [name, setName] = useState(recipe ? recipe.name : '');
    const [description, setDescription] = useState(recipe ? recipe.description : '');
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : '');
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : '');
    const [tagsInput, setTagsInput] = useState('');
    const [tags, setTags] = useState([]);
    const [error, setError] = useState('');
    const [personId, setPersonId] = useState(null);

    useEffect(() => {
        // Assuming your JWT token is stored as 'token' in localStorage        
            // Decode the JWT token to get the person's ID
            setPersonId(localStorage.getItem('userID'));        
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !ingredients || !instructions) {
            setError('Please provide name, description, ingredients, and instructions');
        } else {
            setError('');

            // Split the tagsInput into an array of tags
            const tagsArray = tagsInput.split(/[\s,]+/);
            setTags(tagsArray)
            // Include personId as author in the recipe data
            setRecipe({ name, description, ingredients, instructions, author: personId, tags: tagsArray});

            // Add the recipe with author to the backend
            //recipeFacade.addRecipe({ name, description, ingredients, instructions, author: personId, tags: tagsArray});
            recipeFacade.fetchDataNew(URL,"POST", recipe);
        }
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
                <input
                    type="text"
                    placeholder="Tags (comma or space separated)"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RecipeForm;
