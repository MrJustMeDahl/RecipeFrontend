// RecipeDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import recipeFacade from '../facade/recipeFacade';
import { useEffect } from 'react';
import { useState } from 'react';

const RecipeDetail = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        recipeFacade.getRecipe(recipeId,(data)=>setRecipe(data));
    }, []);

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
            
            {recipe.ingredients && (
            <ul className="ingri-instruct ingredients">
                {recipe.ingredients.trim().split(',').map((ingredient, index) => (
                 <li key={index}>{ingredient}</li>
                ))}
            </ul>
            )}
            
            
            <p class="ingri-instruct instructions">{recipe.instructions}</p>
            </div>
        </div>
    );
}

export default RecipeDetail;
