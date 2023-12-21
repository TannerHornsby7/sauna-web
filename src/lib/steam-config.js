// create a config object for our tests
// get the api key from .env
require('dotenv').config();
const apiKey = process.env.STEAM_API_KEY;
let host = process.env.HOST;


// if we are in dev mode, use localhost
if (process.env.NODE_ENV === 'development') {
    host = 'http://localhost:3000';
}

console.log('process.env is ', process.env);
console.log('host is', host);

const config = {
    returnURL: host + '/validate',
    realm: host,
    apiKey: apiKey,
};

module.exports = config;