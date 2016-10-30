import fetch from 'isomorphic-fetch';
// Will fetch README
fetch('https://raw.githubusercontent.com/katopz/vscode-debug-nodejs-es6/master/README.md')
    .then(function (response) {
        // Something wrong.
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        // Parse response to text
        return response.text();
    })
    .then(function (responseText) {
        // Our README.
        console.log(responseText);
    });