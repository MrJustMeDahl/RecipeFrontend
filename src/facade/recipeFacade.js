import { fetchData } from "./api.js";

const URL = "http://localhost:7070/api";
function recipeFacade() {
  const getAllRecipes = (callback) => {
    return fetchData(URL + "/recipes", callback);
  };
  const getRecipe = (id, callback) => {
    return fetchData(URL + "/recipes/{" + id + "}", callback);
  };
  const addRecipe = (recipe, callback) => {
    return fetchData(URL + "/recipes", callback, "POST", recipe);
  };
  const editRecipe = (recipe, callback) => {
    return fetchData(URL + "/recipes", callback, "PUT", recipe);
  };
  const deleteRecipe = (id, callback) => {
    return fetchData(URL + "/recipes/{" + id + "}", callback, "DELETE");
  };
  return {
    getAllRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
  };
}
export default recipeFacade();
