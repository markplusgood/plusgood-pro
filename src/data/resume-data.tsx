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
      ? 'Ниже вы найдете описание моего технического опыта и навыков. А если что-то из этого вам откликнется, нажмите на одну из кнопок для связи и напишите мне. Буду рад пообщаться и обсудить, как мой опыт может помочь вашему проекту. <a href="/Support automation engineer - Mark Mikhalev - CV ru.pdf" target="_blank" class="underline">Нажмите здесь</a>, чтобы скачать мое резюме.'
      : 'You can find an outline of my tech experience and relevant skills below, or <a href="/Support automation engineer - Mark Mikhalev - CV.pdf" target="_blank" class="underline">click here</a> to download my CV. And if any of it resonates with your wants or needs, hit one of those contact buttons on the right and drop me a line. I’ll be happy to hear from you and talk about how my experience and skill set can help your project.';

  return {
    name: t("name"),
    initials: t("initials"),
    location: t("location"),
    locationLink: t("locationLink"),
    about: t("about"),
    summary: [...t.raw("summary") as string[], summaryWithLink],
    avatarUrl:
      "https://raw.githubusercontent.com/markplusgood/plusgood.pro/main/src/images/avatar.jpeg",
    personalWebsiteUrl: "plusgood.pro",
    contact: {
      email: "mark@plusgood.pro",
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


