'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Section } from "@/components/ui/section";
import { SmartLineBreak } from "@/components/SmartLineBreakProps";
import { GlobeIcon, Link, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/lib/hooks";
import { useTheme } from "next-themes";
import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeAwareHeart } from "@/components/ui/theme-aware-heart";
import { useEffect } from "react";
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ActionButtons } from '@/components/ActionButtons';
import AsciiAnimation from '@/components/AsciiAnimation';
import RabbitAnimation from '@/components/RabbitAnimation';
import { useMobileBar } from '@/components/MobileBarContext';
import parse, { domToReact } from 'html-react-parser';

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

export default function ResumeClientPage({ locale, resumeData }: { locale: string, resumeData: ResumeData | null }) {
  const t = useTranslations('RESUME_DATA');
  const { resumeData: contextResumeData } = useMobileBar();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const router = useRouter();
  const pathname = usePathname();

  const actualResumeData = resumeData || contextResumeData;
  if (!actualResumeData) return null;

  const modifyParagraph = (paragraph: string) => {
    let modified = paragraph;
    // Tooltips
    modified = modified.replace(/abundance culture/g, '<span class="tooltip">abundance culture</span>');
    modified = modified.replace(/БЯМ/g, '<span class="tooltip">БЯМ</span>');
    // Hover cards
    modified = modified.replace(/культуры изобилия/g, '<span class="hovercard">культуры изобилия</span>');
    modified = modified.replace(/has come/g, '<span class="hovercard">has come</span>');
    modified = modified.replace(/better, faster, and stronger/g, '<span class="hovercard">better, faster, and stronger</span>');
    modified = modified.replace(/момент настал/g, '<span class="hovercard">момент настал</span>');
    modified = modified.replace(/второй ренессанс/g, '<span class="hovercard">второй ренессанс</span>');
    // Link hover cards
    modified = modified.replace(/<a href="https:\/\/plusgood\.space"[^>]*>download my CV here<\/a>/g, '<span class="hovercard">$&</span>');
    modified = modified.replace(/<a href="https:\/\/plusgood\.space"[^>]*>book a Calendly slot<\/a>/g, '<span class="hovercard">$&</span>');
    modified = modified.replace(/<a href="https:\/\/plusgood\.space"[^>]*> скачать резюме здесь<\/a>/g, '<span class="hovercard">$&</span>');
    return modified;
  };

  const parseOptions = {
    replace: (domNode: any) => {
      if (domNode.name === 'span' && domNode.attribs?.class === 'tooltip') {
        const word = domNode.children[0].data;
        let content: React.ReactNode = "Tooltip content";
        if (word === "abundance culture") content = "A culture of abundance is a mindset rooted in the belief that humans are not limited by our potential, nor by world resources. It contrasts with a scarcity mindset, which focuses on competition and fear, the basis for the zero-sum-game we currently play as a culture.";
        if (word === "БЯМ") content = "Большая Языковая Модель, англ. Large Language Model";
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="underline decoration-dotted text-blue-300 inline-block indent-0">{word}</span>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[35vw] whitespace-normal">{content}</TooltipContent>
          </Tooltip>
        );
      }
      if (domNode.name === 'span' && domNode.attribs?.class === 'hovercard') {
        // Extract text content properly
        const getTextContent = (children: any[]): string => {
          return children.map(child => {
            if (typeof child === 'string') return child;
            if (child.type === 'text') return child.data;
            if (child.children) return getTextContent(child.children);
            return '';
          }).join('');
        };

        const content = getTextContent(domNode.children);
        let hoverContent: React.ReactNode = "Hover card content";
        if (content === "культуры изобилия") hoverContent = (
          <div>
            <img src="/cornucopia.gif" alt="Рог изобилия" />
          </div>
        );
        if (content === "has come") hoverContent = (
          <div>
            <img src="/good-news-everyone.gif" alt="Hemsworth delivers good news" />
          </div>
        );
        if (content === "better, faster, and stronger") hoverContent = (
          <div>
            <img src="/daft-punk.gif" alt="Daft Punk" />
          </div>
        );
        if (content === "момент настал") hoverContent = (
          <div>
            <img src="/good-news-everyone.gif" alt="Хемсворт из Футурамы сообщает вам хорошие новости" />
          </div>
        );

        if (content === "второй ренессанс") hoverContent = (
          <div>
            <img src="/animatrix.gif" alt="Аниматрица, гифка" />
          </div>
        );

        if (domNode.children[0]?.type === 'tag') {
          // link - need to parse the link properly
          const linkElement = domToReact(domNode.children);
          return (
            <HoverCard>
              <HoverCardTrigger asChild className="underline decoration-dotted text-blue-300">{linkElement}</HoverCardTrigger>
              <HoverCardContent side="top">{hoverContent}</HoverCardContent>
            </HoverCard>
          );
        } else {
          // text
          return (
            <HoverCard>
              <HoverCardTrigger className="underline decoration-dotted text-blue-300 inline-block p-0 h-auto bg-transparent border-none shadow-none hover:bg-transparent indent-0">
                {content}
              </HoverCardTrigger>
              <HoverCardContent side="top">{hoverContent}</HoverCardContent>
            </HoverCard>
          );
        }
      }
    }
  };

  const switchLocale = (newLocale: string) => {
    console.log('Main content locale switch triggered:', newLocale);
    // Save scroll position as percentage to handle content height changes
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    localStorage.setItem('scrollPercent', scrollPercent.toString());
    router.replace(pathname.replace(/\/(en|ru)/, `/${newLocale}`), { scroll: false });
  };


  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-16 py-8 print:p-12">
      <div className="flex justify-center">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="space-y-1.5 text-center">
              <h1 className="text-2xl font-bold font-jakarta">{actualResumeData.name}</h1>
              <SmartLineBreak
                text={actualResumeData.about}
                className="max-w-md text-pretty font-sans text-sm text-muted-foreground print:text-[12px]"
              />
              <p className="max-w-md items-center text-pretty font-sans text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={actualResumeData.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {actualResumeData.location}
                </a>
              </p>


              <div className="hidden flex-col gap-x-1 font-sans text-sm text-muted-foreground print:flex print:text-[12px]">
                {actualResumeData.contact.email ? (
                  <a href={`mailto:${actualResumeData.contact.email}`}>
                    <span className="underline">{actualResumeData.contact.email}</span>
                  </a>
                ) : null}
                {actualResumeData.contact.tel ? (
                  <a href={`https://t.me/markplusgood`}>
                    <span className="underline">{actualResumeData.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>


          </div>
          <div className="w-full h-56 bg-transparent overflow-hidden flex items-center justify-center -mt-8">
            {/* <AsciiAnimation /> */}
            <RabbitAnimation />
          </div>
          <Section>
            <h2 className="text-xl font-bold font-jakarta text-center">{t('aboutSection')}</h2>
            <TooltipProvider>
              <div className="font-sans font-medium text-sm indent-6 tracking-wider text-muted-foreground print:text-[12px]">
                {actualResumeData.summary.map((paragraph: string, index: number) => (
                  <div
                    key={index}
                    className="mb-4"
                  >
                    {parse(modifyParagraph(paragraph), parseOptions)}
                  </div>
                ))}
              </div>
            </TooltipProvider>
          </Section>

          <Section>
            <h2 className="text-xl font-bold font-jakarta text-center">{t('workExperienceSection')}</h2>
            {actualResumeData.work.map((work: Work) => (
              <Card key={work.company} className="mt-4 bg-background">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold font-jakarta leading-none">
                      {work.link ? (
                        <a className="inline-flex items-center gap-x-1 hover:underline" href={work.link} target="_blank">
                          {work.company}
                          <Link className="size-3" />
                        </a>
                      ) : (
                        <span>{work.company}</span>
                      )}
                    </h3>
                  </div>
                </CardHeader>
                {work.positions.map((position: Position, index: number) => (
                  <CardContent key={index} className="mt-2">
                    <h4 className="font-medium font-jakarta text-base text-foreground">{position.title}</h4>
                    <div className="text-xs tabular-nums text-muted-foreground">
                      {position.start} - {position.end ?? "Present"}
                    </div>
                    {typeof position.description === 'string' ? (
                      <p className="mt-2 text-sm">{position.description}</p>
                    ) : (
                      <ul className="mt-2 text-sm list-inside custom-bullet">
                        {position.description.map((item: string, index: number) => (
                          <li className="mb-2" key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                ))}
              </Card>
            ))}
          </Section>

          <Section>
            <h2 className="text-xl font-bold font-jakarta text-center">{t('skillsSection')}</h2>
            <div className="flex flex-wrap justify-center gap-1 mt-4">
              {actualResumeData.skills.map((skill: string) => {
                return (
                  <Badge className="skill-badge font-medium" key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>

        </section>

        <GoogleTagManager gtmId="G-PHBMXCD0E6" />
      </div >

      {/* Responsive button column - hidden on small screens */}
      <div className="contact-buttons-container hidden md:flex flex-col gap-y-2">
        {mounted && (
          <ActionButtons
            resumeData={actualResumeData}
            theme={theme}
            resolvedTheme={resolvedTheme}
            onThemeToggle={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            onLocaleSwitch={() => switchLocale(locale === 'en' ? 'ru' : 'en')}
            className="flex flex-col gap-y-2"
            buttonClassName="size-8 contact-button"
          />
        )}
      </div>
      <ThemeAwareHeart />

    </main >

  );
}
