import loginFacade from "./loginFacade.js";

export function fetchData(url, callback, method, body) {
  const headers = {
    Accept: "application/json",
  };

  if (method === "POST" || method === "PUT") {
    headers["Content-Type"] = "application/json";
    headers["Authorization"] = "Bearer " + loginFacade.getToken;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  fetch(url, options)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => {
      if (error.status) {
        error.fullError.then((eJson) => callback(eJson));
      } else {
        console.log("Network error");
      }
    });
}
