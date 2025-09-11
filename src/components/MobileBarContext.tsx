'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Social {
    name: string;
    url: string;
    icon: string;
}

interface Position {
    title: string;
    start: string;
    end: string;
    description: string[];
}

interface Work {
    company: string;
    link: string;
    badges: string[];
    positions: Position[];
}

interface ResumeData {
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    about: string;
    summary: string[];
    avatarUrl: string;
    personalWebsiteUrl: string;
    contact: {
        email: string;
        tel: string;
        social: Social[];
    };
    work: Work[];
    skills: string[];
}

interface MobileBarContextType {
    isMobileBarOpen: boolean;
    setMobileBarOpen: (open: boolean) => void;
    resumeData: ResumeData | null;
    setResumeData: (data: ResumeData) => void;
    locale: string;
    setLocale: (locale: string) => void;
}

const MobileBarContext = createContext<MobileBarContextType | undefined>(undefined);

export function MobileBarProvider({ children }: { children: ReactNode }) {
    const [isMobileBarOpen, setMobileBarOpen] = useState(false);
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);
    const [locale, setLocale] = useState('en');

    return (
        <MobileBarContext.Provider value={{
            isMobileBarOpen,
            setMobileBarOpen,
            resumeData,
            setResumeData,
            locale,
            setLocale,
        }}>
            {children}
        </MobileBarContext.Provider>
    );
}

export function useMobileBar() {
    const context = useContext(MobileBarContext);
    if (context === undefined) {
        throw new Error('useMobileBar must be used within a MobileBarProvider');
    }
    return context;
}