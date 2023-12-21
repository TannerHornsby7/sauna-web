import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // if the current url has {'/account', '/market/inventory', '/market/instant-sell', '/market/history', '/market/trade', '/market/sell'},
  // check for a cookie and redirect to login if it doesn't exist
  const protected_routes = ['/account', '/market/inventory', '/market/instant-sell', '/market/history', '/market/trade', '/market/sell'];
  for (let i = 0; i < protected_routes.length; i++) {
    if (req.nextUrl.pathname.startsWith(protected_routes[i])) {
      const cookie = req.cookies.get('sauna.user_info');
      // You can add more logic here to validate the cookie
      const origin = req.nextUrl.origin;

      // Create a response and set the cookie
      const response = NextResponse.redirect(`${origin}/soft-login`);
      if (!cookie || cookie === undefined) {
        return response;
      }
    }
  }

  return NextResponse.next();
}