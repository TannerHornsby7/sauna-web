import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
 
export default NextAuth(authConfig).auth;
    
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // make the matcher only allow user to go to the home, about, or the market page
  // maket/inventory, market/instant-sell, market/history, market/trade and market/sell are not allowed
  matcher: ['/', '/market/inventory', '/market/instant-sell', '/market/history', '/market/trade', '/market/sell'],
};