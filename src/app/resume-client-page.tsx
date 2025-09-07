'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { SmartLineBreak } from "@/components/SmartLineBreakProps";
import { GlobeIcon, MailIcon, PhoneIcon, FileDown, MenuIcon, MoonIcon, SunIcon, LanguagesIcon } from "lucide-react";
import { SiTelegram } from '@icons-pack/react-simple-icons';
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { Position } from "@/data/resume-data";
import { Work } from "@/data/resume-data";
import { Skills } from "@/data/resume-data";
import { Education } from "@/data/resume-data";
import { useMounted } from "@/lib/hooks";
import { useTheme } from "next-themes";
import { GoogleTagManager } from '@next/third-parties/google'
import { useState } from "react";

export default function ResumeClientPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="flex justify-center">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="space-y-1.5 text-center">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
              <SmartLineBreak
                text={RESUME_DATA.about}
                className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]"
              />
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>


              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">{RESUME_DATA.contact.email}</span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`https://t.me/markplusgood`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>


          </div>
          <Section>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.summary}
            </p>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>
            {RESUME_DATA.work.map((work: Work) => (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link} target="_blank">
                        {work.company}
                      </a>
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                  </div>
                </CardHeader>
                {work.positions.map((position: Position, index: number) => (
                  <CardContent key={index} className="mt-2">
                    <h4 className="font-medium text-base text-foreground">{position.title}</h4>
                    <div className="text-xs tabular-nums text-muted-foreground">
                      {position.start} - {position.end ?? "Present"}
                    </div>
                    <p className="mt-2 text-sm">{position.description}</p>
                  </CardContent>
                ))}
              </Card>
            ))}
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education: Education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 print:text-[12px]">
                    {education.degree}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill: Skills) => {
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
        <div className="fixed right-0 top-1/2 -translate-y-1/2 block md:hidden">
          <Drawer direction="right" open={isDrawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="h-20 w-8">
                  ||
                </Button>
              </DrawerTrigger>
            <DrawerContent className="top-1/2 -translate-y-1/2">
              <div className="p-4 flex flex-col gap-y-2">
                {mounted && (
                  <Button
                    className="size-8 contact-button"
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  >
                    <span className="normal-blend-mode">
                      {theme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
                    </span>
                  </Button>
                )}
                <Button
                  className="size-8 contact-button"
                  variant="outline"
                  size="icon"
                >
                  <span className="normal-blend-mode">
                    <LanguagesIcon className="size-4" />
                  </span>
                </Button>
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8 contact-button"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`} target="_blank">
                      <span className="normal-blend-mode">
                        <MailIcon className="size-4" />
                      </span>
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Button
                    className="size-8 contact-button"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`https://t.me/markplusgood`} target="_blank">
                      <span className="normal-blend-mode">
                        <SiTelegram className="size-4" />
                      </span>
                    </a>
                  </Button>
                ) : null}

                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8 contact-button"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <span className="normal-blend-mode">
                        <social.icon className="size-4" />
                      </span>
                    </a>
                  </Button>
                ))}

                {RESUME_DATA.contact.download ? (
                  <Button
                    className="size-8 contact-button"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`/Support automation engineer - Mark Mikhalev - CV.pdf`} target="_blank" download="Mark Mikhalev">
                      <span className="normal-blend-mode">
                        <FileDown className="size-4" />
                      </span>
                    </a>
                  </Button>
                ) : null}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <GoogleTagManager gtmId="G-PHBMXCD0E6" />
      </div>

      {/* Responsive button column - hidden on small screens */}
      <div className="contact-buttons-container">
        {mounted && (
          <Button
            className="size-8 contact-button"
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <span className="normal-blend-mode">
              {theme === 'dark' ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
            </span>
          </Button>
        )}
        <Button
          className="size-8 contact-button"
          variant="outline"
          size="icon"
        >
          <span className="normal-blend-mode">
            <LanguagesIcon className="size-4" />
          </span>
        </Button>
        {RESUME_DATA.contact.email ? (
          <Button
            className="size-8 contact-button"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={`mailto:${RESUME_DATA.contact.email}`} target="_blank">
              <span className="normal-blend-mode">
                <MailIcon className="size-4" />
              </span>
            </a>
          </Button>
        ) : null}
        {RESUME_DATA.contact.tel ? (
          <Button
            className="size-8 contact-button"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={`https://t.me/markplusgood`} target="_blank">
              <span className="normal-blend-mode">
                <SiTelegram className="size-4" />
              </span>
            </a>
          </Button>
        ) : null}

        {RESUME_DATA.contact.social.map((social) => (
          <Button
            key={social.name}
            className="size-8 contact-button"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={social.url} target="_blank">
              <span className="normal-blend-mode">
                <social.icon className="size-4" />
              </span>
            </a>
          </Button>
        ))}

        {RESUME_DATA.contact.download ? (
          <Button
            className="size-8 contact-button"
            variant="outline"
            size="icon"
            asChild
          >
            <a href={`/Support automation engineer - Mark Mikhalev - CV.pdf`} target="_blank" download="Mark Mikhalev">
              <span className="normal-blend-mode">
                <FileDown className="size-4" />
              </span>
            </a>
          </Button>
        ) : null}
      </div>
      
    </main>

  );
}