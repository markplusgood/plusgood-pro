'use client';

import { Rocket } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslations } from 'next-intl';

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [isOnGround, setIsOnGround] = useState(true);
    const [isScrollingToTop, setIsScrollingToTop] = useState(false);
    const thresholdRef = useRef<number>(document.documentElement.scrollHeight * 0.3);
    const [hasBeenLaunched, setHasBeenLaunched] = useState(false);
    const [animationState, setAnimationState] = useState('normal');
    const [hasTransition, setHasTransition] = useState(true);
    const t = useTranslations('SCROLL_TO_TOP');

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = thresholdRef.current;
            const hideThreshold = threshold;

            // Show button when scrolled more than threshold, hide when below hideThreshold
            if (scrollY > threshold && !hasBeenLaunched) {
                setIsVisible(true);
            } else if (scrollY < hideThreshold) {
                setIsVisible(false);
                setHasBeenLaunched(false);
            }

            // Reset animation state when scrolling down (unless we're scrolling to top)
            if (!isScrollingToTop) {
                setIsAnimatingOut(false);
                // Reset launched state when user starts scrolling down again
                if (scrollY > threshold && animationState === 'launching') {
                    setHasTransition(false);
                    setAnimationState('resetting');
                    setHasBeenLaunched(false);
                    setTimeout(() => {
                        setHasTransition(true);
                        setAnimationState('normal');
                    }, 0);
                }
            }

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // If we were scrolling to top and scroll has stopped near the top, hide the button
                if (isScrollingToTop && window.scrollY < 50) {
                    setIsAnimatingOut(true);
                    setIsScrollingToTop(false);
                    setAnimationState('normal');
                }
            }, 150);
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial scroll position
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [isScrollingToTop]);

    const scrollToTop = () => {
        setIsScrollingToTop(true);
        setIsAnimatingOut(true);
        setAnimationState('launching');
        setHasBeenLaunched(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={scrollToTop}
                        className={`fixed bottom-8 z-50 size-16 bg-transparent border-none cursor-pointer ${hasTransition ? 'transition-all duration-500 ease-in-out' : ''} hover:scale-110 flex items-center justify-center ${animationState === 'launching' ? 'transform -translate-y-[120vh] opacity-0' :
                            animationState === 'resetting' ? 'transform translate-y-16 opacity-0' :
                                !isOnGround ? 'transform translate-y-16 opacity-0' :
                                    !isVisible ? 'transform translate-y-16 opacity-0' :
                                        'transform translate-y-0 opacity-100'
                            }`}
                        style={{
                            right: 'max(1rem, calc((100vw - 48rem) / 2 - 4rem - 1rem))',
                            background: 'transparent',
                        }}
                        aria-label="Scroll to top"
                    >
                        <Rocket
                            className="w-8 h-8"
                            strokeWidth={1.5}
                            style={{
                                transform: 'rotate(-45deg)',
                                color: 'hsl(var(--foreground))',
                            }}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent
                    side="right"
                    className="border-0 bg-transparent shadow-none"
                >
                    {t('tooltip')}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}