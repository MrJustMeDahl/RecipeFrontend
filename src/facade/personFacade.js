import { fetchData } from "./api";

const URL = "http://localhost:7070/api";
function personFacade() {
  const getAllPersons = (callback) => {
    return fetchData(URL + "/persons", callback);
  };
  const getPerson = (id, callback) => {
    return fetchData(URL + "/persons/" + id, callback);
  };
  const addPerson = (recipe, callback) => {
    return fetchData(URL + "/persons", callback, "POST", recipe);
  };
  const editPerson = (id, recipe) => {
    return fetchData(URL + "/persons/" + id, callback, "PUT", recipe);
  };
  const deletePerson = (id, callback) => {
    return fetchData(URL + "/persons/{" + id + "}", callback, "DELETE");
  };
  return {
    getAllPersons,
    getPerson,
    addPerson,
    editPerson,
    deletePerson,
  };
}
export default personFacade();
