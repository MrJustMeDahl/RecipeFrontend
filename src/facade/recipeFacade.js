import { fetchData } from "./api.js";
import loginFacade from "./loginFacade.js";

const URL = "http://localhost:7070/api";
const makeOptions = (method, payload, addToken) => {
  const opts = {
    method: method,
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      //Authorization: `Bearer ${loginFacade.getToken}`,
      Authorization: `Bearer ${loginFacade.getToken}`,
    },
  };

  if (payload) {
    opts.body = JSON.stringify(payload);
  }

  return opts;
};
const handleHttpErrors = (res) => {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
};
function recipeFacade() {
  const getAllRecipes = (callback) => {
    return fetchData(URL + "/recipes", callback);
  };
  const getRecipe = (id, callback) => {
    return fetchData(URL + "/recipes/" + id, callback);
  };
  const addRecipe = async (recipe, callback) => {
    return await fetchData(URL + "/recipes", callback, "POST", recipe);
  };
  const editRecipe = (id, recipe) => {
    return fetchData(URL + "/recipes/" + id, callback, "PUT", recipe);
  };
  const deleteRecipe = (id, callback) => {
    return fetchData(URL + "/recipes/{" + id + "}", callback, "DELETE");
  };
  const fetchDataNew = async (endpoint, method, payload) => {
    const options = makeOptions(method, payload, false);
    console.log("Endpoint:", endpoint);
    console.log("Options:", options);
    return fetch(endpoint, options).then(handleHttpErrors);
  };
  return {
    getAllRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
    fetchDataNew,
  };
}
export default recipeFacade();
