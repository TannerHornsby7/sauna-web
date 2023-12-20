const axios = require('axios');
const fs = require('fs');

// note: this class is for server side data fetching only
// it can run into security issues and CORS Policy violations if
// run on the client side

class SteamOpenID {
  constructor({ apiKey, returnURL, realm, language = 'english', screenSize = 'large' }) {
    this.apiKey = apiKey;
    this.returnURL = returnURL;
    this.realm = realm;
    this.steamOpenIDURL = 'https://steamcommunity.com/openid/login';
    this.language = language;
    this.screenSize = screenSize;
  }

  generateRedirectURL() {
    return `${this.steamOpenIDURL}` +
      `?openid.ns=http://specs.openid.net/auth/2.0` +
      `&openid.mode=checkid_setup` +
      `&openid.return_to=${this.returnURL}` +
      `&openid.realm=${this.realm}` +
      `&openid.identity=http://specs.openid.net/auth/2.0/identifier_select` +
      `&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select`;
  }

  verify(query) {
    // check that the return_to matches the current realm
    // const returnTo = query['openid.return_to'];
    // if (returnTo !== this.returnURL) {
    //   console.log(query)
    //   console.log(returnTo);
    //   console.log(this.returnURL);
    //   // throw new Error('Invalid return_to');
    // }
    // return steamId which is the last part of the claimed identity
    console.log(query)
    const claimedId = query['openid.identity'];
    console.log(claimedId)
    return claimedId.split('/').pop();
  }

  async getUserInfo(steamId) {
    const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${this.apiKey}&steamids=${steamId}`;
    const response = await axios.get(url);
    console.log(response)
    const { personaname, avatarfull } = response.data.response.players[0];
    console.log(personaname, avatarfull)
    return { personaname, avatarfull };
  }

  async getUserInventory(steamId) {
    // ensure the user is logged in
    if (!steamId) {
      throw new Error('User is not logged in');
    }
    // get the users inventory
    const url = `https://steamcommunity.com/inventory/${steamId}/440/2?l=${this.language}&count=5000`;
    console.log('getting inventory from', url)
    // make an axios request to the url
    let response = 'Error'
    try {
      response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting inventory');
    }
  }
}

module.exports = SteamOpenID;