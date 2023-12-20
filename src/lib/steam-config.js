// create a config object for our tests
// get the api key from .env
require('dotenv').config();
const apiKey = process.env.STEAM_API_KEY;

const config = {
    returnURL: 'http://localhost:3000/validate',
    realm: 'http://localhost:3000',
    apiKey: apiKey,
};

module.exports = config;