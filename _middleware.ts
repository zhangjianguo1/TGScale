import { next } from '@cloudflare/next-on-pages';

export const config = {
  matcher: [
    '/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt|manifest.json|sw.js|apple-icon.png|icon0.svg|icon1.png).*)',
  ],
};

export default async function middleware() {
  return next();
}