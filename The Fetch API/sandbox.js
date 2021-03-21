// fetch api
// 1. fetch the data
// 2. take the response
// 3. return the response.json

fetch('json/luigi.json').then((response) => {
    console.log('resolved', response)
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err)
});