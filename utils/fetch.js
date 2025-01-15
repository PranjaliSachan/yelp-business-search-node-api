const fetch = require('node-fetch');

exports.apiCall = (url, options) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(error => {
                console.error(`API CALL ERROR ::`, error);
                reject(error);
            });
    });
}