import { NextRequest, NextResponse } from 'next/server';
import SteamOpenID from '@/lib/steam-openid';
import config from '@/lib/steam-config';

// we store the steamid in the browser as a cookie
// so we can use it to fetch the user's data
// (see src/lib/useUser.ts)

export async function GET(req: NextRequest) {
  // Check if the user is already logged in
  // by checking the cookies of the request
  if (req.cookies.get('user_info')) {
    // Redirect the user to the homepage
    return NextResponse.redirect('/');
  }

  // Construct the Steam OpenID URL
  const steamOpenID = new SteamOpenID(config);
  const steamOpenIDUrl = steamOpenID.generateRedirectURL();

  // Redirect the user to the Steam OpenID 2.0 provider
  return NextResponse.redirect(steamOpenIDUrl);
}