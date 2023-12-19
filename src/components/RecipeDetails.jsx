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
        <div class="recipes">
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <div class="recipes-flex-h3">
            <h3>Ingredients</h3>
            <h3>Instructions</h3>
            </div>
            <div class="recipes-flex">
            
            <ul class="ingri-instruct ingredients">
                {recipe.items.split(',').map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            
            
            <p class="ingri-instruct instructions">{recipe.instructions}</p>
            </div>
        </div>
    );
}

export default RecipeDetail;
