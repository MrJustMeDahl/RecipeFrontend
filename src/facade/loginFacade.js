function loginFacade() {

    const url = 'http://localhost:7070/api/';
    const loginUrl = 'auth/login';
    const registerUrl = 'auth/register';

    const handleHttpErrors = (res) => {
        if(!res.ok){
            return Promise.reject({status: res.status, fullError: res.json()});
        }
        return res.json();
    }

    const makeOptions = (requestMethod, requestBody) => {
        const options = {
            method: requestMethod,
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(requestBody),
        }
        return options;
    }

    const setLocalStorage = (data) => {
        localStorage.setItem('jwtToken', data.token);
        localStorage.setItem('userID', data.id);
        localStorage.setItem('username', data.name);
    }

    const login = (email, password) => {

        const credentials = {
            email: email,
            password: password,
        }
        
        const options = makeOptions("POST", credentials);

        return fetch(url + loginUrl, options)
            .then(handleHttpErrors)
            .then(data => setLocalStorage(data))
            .catch(error => {
                if(error.status){
                    error.fullError.then(e => console.log(e));
                } else {
                    console.log("Fatal server error.", error);
                }
            })
    }

    const register = (email, password, name, role) => {
        
        const credentials = {
            email: email,
            password: password,
            name: name,
            role: role,
        }

        const options = makeOptions("POST", credentials);

        return fetch(url + registerUrl, options)
            .then(handleHttpErrors)
            .then(data => setLocalStorage(data))
            .catch(error => {
                if(error.status){
                    error.fullError.then(e => console.log(e));
                } else {
                    console.log("Fatal server error.", error);
                }
            })
    }

    const getToken = () => {
        return localStorage.getItem('jwtToken');
    }

    const isLoggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }

    const logout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userID');
        localStorage.removeItem('username');
    }

    const getUserRole = () => {
        const token = getToken();
        if(isLoggedIn){
            const payloadBase64 = token.split('.')[1];
            const decodeClaims = JSON.parse(window.atob(payloadBase64));
            const role = decodeClaims.role;
            return role;
        }
    }

    return {
        login,
        isLoggedIn,
        getToken,
        logout,
        register,
        getUserRole,
    };
}

let returnValue = loginFacade();
export default returnValue;