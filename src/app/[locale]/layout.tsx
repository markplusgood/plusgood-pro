import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { LOCALES } from "@/lib/constants";
import { getResumeData } from "@/data/resume-data";
import { DataProvider } from "@/components/DataProvider";

import React from "react";

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Glad you stopped by 🎉",
  description: "Mark's profile page",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messagesModule = await import(`../../messages/${locale}.json`);
  const messages = messagesModule.default;
  const resumeData = await getResumeData(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DataProvider resumeData={resumeData} locale={locale}>
        {children}
      </DataProvider>
    </NextIntlClientProvider>
  );
}
