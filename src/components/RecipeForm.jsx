import React, { useState, useEffect } from 'react';
import recipeFacade from '../facade/recipeFacade';

const RecipeForm = () => {
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
        const token = localStorage.getItem('token');
        if (token) {
            // Decode the JWT token to get the person's ID
            const decodedToken = decodeToken(token);
            setPersonId(decodedToken.personId);
        }
    }, []);

    const decodeToken = (token) => {
        // Your decoding logic goes here (use a library like jsonwebtoken)
        // For simplicity, assuming a token structure like { personId: '123' }
        const decoded = JSON.parse(atob(token.split('.')[1]));
        return decoded;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !description || !ingredients || !instructions) {
            setError('Please provide name, description, ingredients, and instructions');
        } else {
            setError('');

            // Split the tagsInput into an array of tags
            const tagsArray = tagsInput.split(/[\s,]+/);
            setTags(tagsArray)
            setPersonId
            // Include personId as author in the recipe data
            setRecipe({ name, description, ingredients, instructions, author: personId, tags: tagsArray});

            // Add the recipe with author to the backend
            recipeFacade.addRecipe({ name, description, ingredients, instructions, author: personId, tags: tagsArray});
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
