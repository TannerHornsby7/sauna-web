import { NextRequest, NextResponse } from 'next/server';
import SteamOpenID from '@/lib/steam-openid';
import steamConfig from '@/lib/steam-config';

export async function GET(req: NextRequest) {
    const steamOpenID = new SteamOpenID(steamConfig);
    let query = req.nextUrl.searchParams; // the query
    let steamID = steamOpenID.verify(query);
    const origin = req.nextUrl.origin;


    if (!steamID) {
        console.log('Could not verify steamID');
        return NextResponse.redirect(`${origin}/soft-login`);
    }

    const userInfo = await steamOpenID.getUserInfo(steamID);
    console.log('userInfo is', userInfo);

    // Determine the origin (protocol and host) from the incoming request
    
    // Create a response and set the cookie
    const response = NextResponse.redirect(`${origin}/market`);
    /*
    user info takes the form:
    interface User {
    steamId: string;
    name?: string;
    pictureUrl?: string;
    // Add other user properties as needed
}
    */
    const user_info = {
        steamId: steamID,
        name: userInfo.personaname,
        pictureUrl: userInfo.avatar,
    }
    console.log('pre-string user info is', user_info);
    // convert user_info to a string
    const user_info_str = JSON.stringify(user_info);
    response.cookies.set('sauna.user_info', user_info_str, {
        path: '/',
        // httpOnly: true, // Optional, for security
        sameSite: 'lax', // Optional, for CSRF protection
        secure: true, // Optional, but recommended
    });

    return response;
}