import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ru'];

export default getRequestConfig(async ({ locale }) => {
  // Debug log to verify what next-intl resolves here at runtime
  console.log('[i18n] getRequestConfig locale:', locale);

  // Avoid throwing 404 if locale is undefined; fall back to 'en'
  const resolved = locales.includes(locale as any) ? (locale as string) : 'en';

  return {
    locale: resolved,
    messages: (await import(`./messages/${resolved}.json`)).default
  };
});