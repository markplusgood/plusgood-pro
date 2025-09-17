'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import AsciiAnimation404 from '@/components/AsciiAnimation404';

// Simple translations without next-intl context
const translations = {
  en: {
    title: '404 - Not Found',
    description: 'I Think We Should Be Leaving Now...',
    button: 'MAIN PAGE'
  },
  ru: {
    title: '404 - Не Найдено',
    description: 'Думаю, нам пора...',
    button: 'НА ГЛАВНУЮ'
  }
};

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/ru') ? 'ru' : 'en';
  const t = translations[locale];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="w-full max-w-4xl">
        <AsciiAnimation404 />
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
        <p className="text-muted-foreground mb-6">
          {t.description}
        </p>
        <Button
          asChild
          className={`main-page-button font-medium ${locale === 'ru' ? 'amazing-slab-fallback' : ''}`}
          style={{
            fontFamily: locale === 'ru'
              ? 'Amazing Slab Black Trial, Impact, Arial Black, Helvetica Bold, sans-serif'
              : 'Aachen Bold, sans-serif',
            fontWeight: locale === 'ru' ? 900 : 'inherit'
          }}
        >
          <Link href={`/${locale}`}>
            {t.button}
          </Link>
        </Button>
      </div>
    </div>
  );
}