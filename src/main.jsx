import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RecipesPage from './components/RecipesPage';
import RecipeDetail from './components/RecipeDetails';
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path= "/" element={<App />}>
      <Route path="/" element={<RecipesPage />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
