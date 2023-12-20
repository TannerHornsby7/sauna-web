const SteamOpenID = require('../../src/lib/steam-openid');
const steamConfig = require('../../src/lib/steam-config');

const SteamOpenIDManager = new SteamOpenID(steamConfig);

describe('SteamOpenID', () => {
    // try generating a redirect url
    test('generateRedirectURL', () => {
        const redirectURL = SteamOpenIDManager.generateRedirectURL();
        expect(redirectURL).toBeDefined();
    });

    // try verifying an openid response
    test('verify', async () => {
        // create a fake openid response, they have periods in the keys and are
        // of the form URLSearchParams(query)
        const fakeOpenIDResponse = {
            'openid.ns': 'http://specs.openid.net/auth/2.0',
            'openid.mode': 'id_res',
            'openid.op_endpoint': 'https://steamcommunity.com/openid/login',
            'openid.claimed_id': 'https://steamcommunity.com/openid/id/76561198025039314',
            'openid.identity': 'https://steamcommunity.com/openid/id/76561198025039314',
            'openid.return_to': 'http://localhost:3000',
            'openid.response_nonce': '2021-03-25T17:00:00Zl6y2hZ9qYQmB8xV8vWfK1Q==',
            'openid.assoc_handle': '1234567890',
            'openid.signed': 'signed,op_endpoint,claimed_id,identity,return_to,response_nonce,assoc_handle',
            'openid.sig': '1234567890',
        };        

        // verify the response
        const steamId = await SteamOpenIDManager.verify(fakeOpenIDResponse);
        expect(steamId).toBeDefined();
        // set the user info
        console.log('steam id is', steamId)
        let userInfo = await SteamOpenIDManager.getUserInfo(steamId);
        expect(userInfo).toBeDefined();
        // check the users inventory
        const inventory = await SteamOpenIDManager.getUserInventory('76561198260315962');
        expect(inventory).toBeDefined();
        console.log(inventory);
    });
});    