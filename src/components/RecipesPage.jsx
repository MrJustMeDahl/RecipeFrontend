import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../recipesDB';
import "../styling/Recommended.css";

const RecipesPage = () => {
    return (
        <div class="recipes">
            <h1>Recipes</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipesPage;
