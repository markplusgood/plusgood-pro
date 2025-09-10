'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Section } from "@/components/ui/section";
import { SmartLineBreak } from "@/components/SmartLineBreakProps";
import { GlobeIcon, Link, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/lib/hooks";
import { useTheme } from "next-themes";
import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeAwareHeart } from "@/components/ui/theme-aware-heart";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ActionButtons } from '@/components/ActionButtons';
import AsciiAnimation from '@/components/AsciiAnimation';
import RabbitAnimation from '@/components/RabbitAnimation';

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

export default function ResumeClientPage({ locale, resumeData }: { locale: string, resumeData: ResumeData }) {
  const t = useTranslations('RESUME_DATA');
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname.replace(/\/(en|ru)/, `/${newLocale}`));
  };

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto px-16 py-8 print:p-12">
      <div className="flex justify-center">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="space-y-1.5 text-center">
              <h1 className="text-2xl font-bold">{resumeData.name}</h1>
              <SmartLineBreak
                text={resumeData.about}
                className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]"
              />
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={resumeData.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {resumeData.location}
                </a>
              </p>


              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                {resumeData.contact.email ? (
                  <a href={`mailto:${resumeData.contact.email}`}>
                    <span className="underline">{resumeData.contact.email}</span>
                  </a>
                ) : null}
                {resumeData.contact.tel ? (
                  <a href={`https://t.me/markplusgood`}>
                    <span className="underline">{resumeData.contact.tel}</span>
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
            <h2 className="text-xl font-bold text-center">About</h2>
            <div className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {resumeData.summary.map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold text-center">Work Experience</h2>
            {resumeData.work.map((work: Work) => (
              <Card key={work.company} className="mt-4">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
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
                    <h4 className="font-medium text-base text-foreground">{position.title}</h4>
                    <div className="text-xs tabular-nums text-muted-foreground">
                      {position.start} - {position.end ?? "Present"}
                    </div>
                    {typeof position.description === 'string' ? (
                      <p className="mt-2 text-sm">{position.description}</p>
                    ) : (
                      <ul className="mt-2 text-sm list-disc list-inside colored-bullet">
                        {position.description.map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                ))}
              </Card>
            ))}
          </Section>

          <Section>
            <h2 className="text-xl font-bold text-center">Skills</h2>
            <div className="flex flex-wrap justify-center gap-1 mt-4">
              {resumeData.skills.map((skill: string) => {
                return (
                  <Badge className="print:text-[10px] skill-badge" key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>

        </section>

        {/* Drawer trigger button - visible on small screens */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 block md:hidden" style={{ width: '36px', height: '52px' }}>
          <Drawer direction="right" open={isDrawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" className="w-full h-full px-2 py-1">
                <GripVertical size={22} />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle className="sr-only">Contact Links</DrawerTitle>
              <div className="pl-4 pr-4 pt-4 pb-4">
                {mounted && (
                  <ActionButtons
                    resumeData={resumeData}
                    theme={theme}
                    resolvedTheme={resolvedTheme}
                    onThemeToggle={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    onLocaleSwitch={() => switchLocale(locale === 'en' ? 'ru' : 'en')}
                    className="flex flex-col gap-y-2 items-end"
                    buttonClassName="size-8 contact-button pointer-events-auto"
                  />
                )}
              </div>
            </DrawerContent>
          </Drawer>
        </div >
        <GoogleTagManager gtmId="G-PHBMXCD0E6" />
      </div >

      {/* Responsive button column - hidden on small screens */}
      <div className="contact-buttons-container hidden md:flex flex-col gap-y-2">
        {mounted && (
          <ActionButtons
            resumeData={resumeData}
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
