function loginFacade() {
    return {
        login: function (username, password) {
            return new Promise((resolve, reject) => {
                const options = {
                    method: 'POST',
                    uri: 'http://localhost:7070/api/auth/login',
                    body: {
                        username: username,
                        password: password
                    },
                    json: true
                };
                request(options)
                    .then(function (parsedBody) {
                        resolve(parsedBody);
                    })
                    .catch(function (err) {
                        reject(err);
                    });
            });
        }
    };
}

let returnVal = loginFacade();
exports.loginFacade = returnVal;