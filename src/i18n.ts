import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { LOCALES } from './lib/constants';

export default getRequestConfig(async ({ locale }) => {
  // Debug log to verify what next-intl resolves here at runtime
  console.log('[i18n] getRequestConfig locale:', locale);

  // Avoid throwing 404 if locale is undefined; fall back to 'en'
  const resolved = LOCALES.includes(locale as any) ? (locale as string) : 'en';

  const messages = await import(`./messages/${resolved}.json`);
  return {
    locale: resolved,
    messages: messages.default
  };
});