// RecipeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../recipesDB';

const RecipeDetail = () => {
    const { recipeId } = useParams();
    const recipe = recipes.find(r => r.id.toString() === recipeId);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <h3>Ingredients</h3>
            <ul>
                {recipe.items.split(' ').map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeDetail;
