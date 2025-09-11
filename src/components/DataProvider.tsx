'use client';

import { useMobileBar } from './MobileBarContext';
import { useEffect } from 'react';

interface ResumeData {
    contact: {
        email: string;
        tel: string;
        social: Array<{
            name: string;
            url: string;
            icon: string;
        }>;
    };
}

interface DataProviderProps {
    resumeData: ResumeData;
    locale: string;
    children: React.ReactNode;
}

export function DataProvider({ resumeData, locale, children }: DataProviderProps) {
    const { setResumeData, setLocale } = useMobileBar();

    useEffect(() => {
        setResumeData(resumeData);
        setLocale(locale);
    }, [resumeData, locale, setResumeData, setLocale]);

    return <>{children}</>;
}