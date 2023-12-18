import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from './recipesDB';

const RecipesPage = () => {
    return (
        <div>
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
