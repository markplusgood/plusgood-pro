import { MailIcon, MoonIcon, SunIcon, LanguagesIcon, CalendarDaysIcon } from "lucide-react";
import { SiTelegram, SiX } from '@icons-pack/react-simple-icons';
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import Obfuscate from 'react-obfuscate';

interface ActionButtonsProps {
    resumeData: {
        contact: {
            email: string;
            tel: string;
            social: Array<{
                name: string;
                url: string;
                icon: string;
            }>;
        };
    };
    theme: string | undefined;
    resolvedTheme: string | undefined;
    onThemeToggle: () => void;
    onLocaleSwitch: () => void;
    className?: string;
    buttonClassName?: string;
}

export function ActionButtons({
    resumeData,
    theme,
    resolvedTheme,
    onThemeToggle,
    onLocaleSwitch,
    className = "",
    buttonClassName = "size-8 contact-button"
}: ActionButtonsProps) {
    return (
        <div className={className}>
            <Button
                className={buttonClassName}
                variant="outline"
                size="icon"
                onClick={onThemeToggle}
            >
                <span className="normal-blend-mode">
                    {resolvedTheme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
                </span>
            </Button>
            <Button
                className={buttonClassName}
                variant="outline"
                size="icon"
                onClick={() => {
                    console.log('ActionButtons locale switch clicked');
                    onLocaleSwitch();
                }}
            >
                <span className="normal-blend-mode">
                    <LanguagesIcon className="size-4" />
                </span>
            </Button>
            {resumeData.contact.email ? (
                <Button
                    className={buttonClassName}
                    variant="outline"
                    size="icon"
                    asChild
                >
                    {/* @ts-ignore */}
                    <Obfuscate email={resumeData.contact.email} target="_blank" className="hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground">
                        <span className="normal-blend-mode">
                            <MailIcon className="size-4" />
                        </span>
                    </Obfuscate>
                </Button>
            ) : null}
            <Button
                className={buttonClassName}
                variant="outline"
                size="icon"
                asChild
            >
                {/* @ts-ignore */}
                <Obfuscate href="https://calendly.com/markplusgood/15min-chat" target="_blank" rel="noopener noreferrer" className="hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground">
                    <span className="normal-blend-mode">
                        <CalendarDaysIcon className="size-4" />
                    </span>
                </Obfuscate>
            </Button>
            {resumeData.contact.tel ? (
                <Button
                    className={buttonClassName}
                    variant="outline"
                    size="icon"
                    asChild
                >
                    {/* @ts-ignore */}
                    <Obfuscate href={`https://t.me/markplusgood`} target="_blank" className="hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground">
                        <span className="normal-blend-mode">
                            <SiTelegram className="size-4" />
                        </span>
                    </Obfuscate>
                </Button>
            ) : null}
            {resumeData.contact.social?.find(s => s.icon === 'github') && (
                <Button
                    className={buttonClassName}
                    variant="outline"
                    size="icon"
                    asChild
                >
                    {/* @ts-ignore */}
                    <Obfuscate href={resumeData.contact.social.find(s => s.icon === 'github')!.url} target="_blank" rel="noopener noreferrer" className="hover:bg-accent hover:text-accent-foreground">
                        <span className="normal-blend-mode">
                            <GitHubIcon className="size-4" />
                        </span>
                    </Obfuscate>
                </Button>
            )}
            {resumeData.contact.social?.find(s => s.icon === 'linkedin') && (
                <Button
                    className={buttonClassName}
                    variant="outline"
                    size="icon"
                    asChild
                >
                    {/* @ts-ignore */}
                    <Obfuscate href={resumeData.contact.social.find(s => s.icon === 'linkedin')!.url} target="_blank" rel="noopener noreferrer" className="hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground">
                        <span className="normal-blend-mode">
                            <LinkedInIcon className="size-4" />
                        </span>
                    </Obfuscate>
                </Button>
            )}
            {resumeData.contact.social?.find(s => s.icon === 'x') && (
                <Button
                    className={buttonClassName}
                    variant="outline"
                    size="icon"
                    asChild
                >
                    {/* @ts-ignore */}
                    <Obfuscate href={resumeData.contact.social.find(s => s.icon === 'x')!.url} target="_blank" rel="noopener noreferrer" className="hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground">
                        <span className="normal-blend-mode">
                            <SiX className="size-4" />
                        </span>
                    </Obfuscate>
                </Button>
            )}
        </div>
    );
}