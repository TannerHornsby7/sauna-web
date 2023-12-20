// display the route path in the dom using next
import { NextRequest, NextResponse } from 'next/server';
import SteamOpenID from '@/lib/steam-openid';
import steamConfig from '@/lib/steam-config';

export function GET(req: NextRequest) {
    const steamOpenID = new SteamOpenID(steamConfig);
    let homepage = req.nextUrl.basePath //the home page
    let steamID = steamOpenID.verify(req.url)
    if (!steamID) {
        // redirect to home page without setting the user
        // because the user is not logged in
        console.log('Could not verify steamID')
        return NextResponse.redirect('/');
    }
    // set the userinfo
    const userInfo = steamOpenID.getUserInfo(steamID);
    console.log(userInfo);
    // set the userInfo in the browsers cookies
    req.cookies.set('steamid', steamID);
    return NextResponse.redirect(homepage);
}