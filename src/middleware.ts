import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Locales supported by the app
  locales: ['en', 'ru'],
  // Default when no locale is present
  defaultLocale: 'en',
  // Always use explicit prefixes so /en and /ru resolve consistently
  localePrefix: 'always'
});

export const config = {
  // Recommended matcher from next-intl docs: exclude API, Next internals and file assets
  matcher: ['/((?!api|_next|.*\\..*).*)']
};