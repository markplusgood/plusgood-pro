import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileBarProvider } from "@/components/MobileBarContext";
import { PersistentMobileBar } from "@/components/PersistentMobileBar";
import { Providers } from "@/components/providers";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={inter.className} suppressHydrationWarning>
            <body suppressHydrationWarning>
                <GoogleTagManager gtmId="G-PHBMXCD0E6" />
                <Providers>
                    <MobileBarProvider>
                        {children}
                        <PersistentMobileBar />
                    </MobileBarProvider>
                </Providers>
            </body>
        </html>
    );
}