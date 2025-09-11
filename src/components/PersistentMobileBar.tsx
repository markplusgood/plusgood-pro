'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { GripVertical } from "lucide-react";
import { ActionButtons } from '@/components/ActionButtons';
import { useMobileBar } from './MobileBarContext';
import { useTheme } from 'next-themes';
import { useRouter, usePathname } from 'next/navigation';

export function PersistentMobileBar() {
    const { isMobileBarOpen, setMobileBarOpen, resumeData, locale } = useMobileBar();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    if (!resumeData) return null;

    const switchLocale = (newLocale: string) => {
        // Save scroll position as percentage to handle content height changes
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        localStorage.setItem('scrollPercent', scrollPercent.toString());
        localStorage.setItem('mobileBarOpen', isMobileBarOpen.toString());
        router.replace(pathname.replace(/\/(en|ru)/, `/${newLocale}`), { scroll: false });
    };

    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 block md:hidden" style={{ width: '36px', height: '52px' }}>
            <Sheet open={isMobileBarOpen} onOpenChange={setMobileBarOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="w-full h-full px-2 py-1">
                        <GripVertical size={22} />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-4 bg-background/66 w-auto max-w-xs border-0">
                    <SheetTitle className="sr-only">Contact Links</SheetTitle>
                    <div className="flex flex-col justify-center h-full">
                        <ActionButtons
                            resumeData={resumeData}
                            theme={theme}
                            resolvedTheme={resolvedTheme}
                            onThemeToggle={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            onLocaleSwitch={() => switchLocale(locale === 'en' ? 'ru' : 'en')}
                            className="flex flex-col gap-y-2 items-end"
                            buttonClassName="size-8 contact-button pointer-events-auto"
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}