import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../recipesDB';
import "../styling/Recommended.css";

const RecommendedRecipes = () => {

 
    return (
        <div class="recipes">
            <h1 class="recipes-h1">Trending Recipes!</h1>
            <section class="recipes-section">
            <div class="recipes-div">
                {recipes.map(recipe => (
                    <div class="recipes-div-div" key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                    </div>
                ))}
            </div>
            </section>
    
        </div>
    );
}


export default RecommendedRecipes;