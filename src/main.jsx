import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RecipesPage from './components/RecipesPage';
import RecipeDetail from './components/RecipeDetails';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin.jsx';
import RecommendedRecipes from './components/RecommendedRecipes.jsx';
import SignUp from './components/SignUp.jsx';
import RecipeForm from './components/RecipeForm.jsx';
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter(
  createRoutesFromElements(
      <Route path= "/" element={<App />}>
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recommended" element={<RecommendedRecipes />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipeform" element={<RecipeForm />} />

      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
