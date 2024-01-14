import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styling/RecipeDetails.css";
import recipeFacade from '../facade/recipeFacade';

const RecommendedRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        recipeFacade.getAllRecipes((data)=>setRecipes(data));
    }, []);


 
    return (
        <div class="recipes">
            <h1 class="recipes-h1">Trending Recipes!</h1>
            <section class="recipes-section">
            <div class="recipes-div">
                {recipes?.map(recipe => (
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