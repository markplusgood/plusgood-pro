import { GitHubIcon, LinkedInIcon, } from "@/components/icons";
import { SiX } from "@icons-pack/react-simple-icons";
import { getTranslations } from "next-intl/server";

export type Position = {
  title: string;
  start: string;
  end?: string;
  description: string | string[];
};

export type Work = {
  company: string;
  link: string;
  badges: readonly string[];
  positions: Position[];
};

export type Skills = string;

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export const getResumeData = async (locale: string) => {
  const t = await getTranslations({ locale, namespace: "RESUME_DATA" });

  const summaryWithLink =
    locale === "ru"
      ? ''
      : '';

  return {
    name: t("name"),
    initials: t("initials"),
    location: t("location"),
    locationLink: t("locationLink"),
    about: t("about"),
    summary: [...t.raw("summary") as string[], summaryWithLink],
    avatarUrl:
      "",
    personalWebsiteUrl: "plusgood.space",
    contact: {
      email: "mark@plusgood.space",
      tel: "https://t.me/markplusgood",
      download: "",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/markplusgood",
          icon: "github",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/markplusgood/",
          icon: "linkedin",
        },
        {
          name: "X",
          url: "https://x.com/MarkPlusgood",
          icon: "x",
        },
      ],
    },
    work: t.raw("work"),
    skills: t.raw("skills"),
  };
};


