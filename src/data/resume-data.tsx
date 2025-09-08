import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { Download } from "lucide-react";

export type Position = { // Exporting Position type
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

export const RESUME_DATA = {
  name: "Mark Mikhalev",
  initials: "MM",
  location: "Georgia, GET",
  locationLink: "https://maps.app.goo.gl/KyTruQPXLKrH3yUj8",
  about:
    "AI Automation Engineer | Customer Advocate | Team Lead",
  summary:
    [
      "I create work environments where agentic AI automations handle tedious tasks, and teams focus on the human side of work they actually enjoy.",
      "As a generalist with a passion for tech, I acquired a diverse experience and skill set that enables me to benefit both digital and traditional projects — working with code and with people, fostering customer relations, managing hybrid teams, or building data-driven AI-enabled systems that lighten the load and boost teams' efficiency and well-being.",
      "Managing people and processes with care, creating high-trust work environments that facilitate growth, and striving to deliver exceptional service — these have always been the focus of my work. These are my two cents on manifesting the culture of abundance.",
      "You can find an outline of my tech experience and relevant skills below, or click here to download my CV. And if any of it resonates with your wants or needs, hit one of those contact buttons on the right and drop me a line. I’ll be happy to hear from you and talk about how my experience and skill set can help your project.",
    ],
  avatarUrl: "https://raw.githubusercontent.com/markplusgood/plusgood.pro/main/src/images/avatar.jpeg",
  personalWebsiteUrl: "plusgood.pro",
  contact: {
    email: "mark@plusgood.pro",
    tel: "https://t.me/markplusgood",
    download: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/markplusgood",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/markplusgood/",
        icon: LinkedInIcon,
      },


      /*
      {
        name: "X",
        url: "https://x.com/MarkPlusgood",
        icon: XIcon,
      },
      */
      {
        name: "Download",
        url: "/Mark Mikhalev - CV.pdf",
        icon: Download,
      },
    ],
  },

  work: [
    {
      company: "NDA",
      link: "",
      badges: ["Remote"],
      positions: [
        {
          title: "AI Automation and Quality Engineer",
          start: "May 2025",
          end: "Sept 2025",
          description: [
            "Built and optimized AI-driven automated workflows and QA processes for the internal services team, boosting delivery speed and reducing workload by 25%.",
            "Developed a data-driven AI-enabled quality assurance framework that provided clear metrics for optimizing performance and future growth.",
            "Created comprehensive documentation and user manuals to help with long-term maintenance of these solutions.",
          ],
        },

      ],
    },

    {
      company: "FunnelFox",
      link: "https://funnelfox.com/",
      badges: ["Remote"],
      positions: [
        {
          title: "Tech Support Engineer at FunnelFox",
          start: "Dec 2024",
          end: "May 2025",
          description: [
            "Provided expert-level technical support for businesses leveraging the FunnelFox web2app platform.",
            "Conducted in-depth technical investigations to resolve and escalate complex customer issues.",
            "Designed and implemented workflow automations that enhanced team performance.",
            "Reduced lost case instances to zero, strengthening client relationships.",
            "-Co-developed support team workflows and established key performance indicators (KPIs) to track success.",
            "Maintained and improved product documentation.",
          ],
        },

      ],
    },

    {
      company: "TripleTen",
      link: "https://tripleten.com",
      badges: ["Remote"],
      positions: [
        {
          title: "Customer support team lead",
          start: "Jul 2023",
          end: "Oct 2023",
          description: [
            "Led a global team of 10 technical and educational support agents, fostering a collaborative and high-performance culture.",
            "Ensured the hiring processes filled the team with desired talent.",
            "Managed the selection and migration to a new software stack, streamlined cross-team data integration, and unlocked new opportunities for leveraging state-of-the-art tech for team efficiency and customer satisfaction.",
          ],
        },
        {
          title: "Senior customer support agent",
          start: "Oct 2021",
          end: "Jul 2023",
          description: [
            "Fostered team efficiency and user satisfaction by delivering exceptional technical and educational support and serving as a role model for colleagues, keeping their endorsement at 99%.",
            "Acted as a technical authority, providing expertise to colleagues and users, ensuring the team's adherence to company policies and standards.",
            "Provided continuous quality assurance for maintaining the service up to the company’s standards and developing the team’s talent.",
            "Built and maintained a comprehensive support analytics system to track team performance, workload, and collect valuable UX insights for product teams.",
            "Designed, built, and maintained robust processes and automations to ensure exceptional support, seamless inter-team collaboration, and team development.",
            "Served as the connecting point for cross-team collaborations and knowledge sharing.",
          ],
        },
        {
          title: "Customer support agent",
          start: "Oct 2020",
          end: "Oct 2021",
          description: [
            "Resolved 3,000+ customer cases with 100% compliance to company standards, maintaining CSAT at 99%.",
            "Provided technical, educational, and emotional support to hundreds of students from diverse backgrounds launching their tech careers globally.",
          ],
        },
      ],
    },

    {
      company: "Instaon",
      link: "https://instaon.io/en",
      badges: ["Remote"],
      positions: [
        {
          title: "Customer success manager",
          start: "Feb 2019",
          end: "Oct 2019",
          description: [
            "Onboarded and guided 100+ agencies and SMBs in integrating a novel AI solution into their digital marketing strategies.",
            "Conducted business verification and fraud detection activities and ensured customers' compliance with ad network policies, keeping the company’s Google Ads Partner account free from low-quality traffic and strikes.",
            "Acted as a trusted advisor, resolving technical and strategic challenges in implementing proprietary LLM tools and campaign management.",
            "Served as the voice of the customer, collecting and channeling CX data to inform product development.",
          ],
        },

      ],
    },

    {
      company: "Freelance",
      link: "",
      badges: ["Remote"],
      positions: [
        {
          title: "Digital marketing manager",
          start: "2017",
          end: "Oct 2019",
          description: [
            "Created and managed dozens of Google Ads and Yandex Ads campaigns, increasing client sales by an average of 45% while reducing marketing spend by up to 30% through improved copywriting, targeting, and bid optimization.",
            "Provided digital marketing consulting to SMBs, conducting comprehensive audits and implementing conversion optimization strategies that improved campaign ROI by an average of 30%",
          ],
        },
        {
          title: "Translator",
          start: "2017",
          end: "Oct 2019",
          description: [
            "Translated 500+ pages across English, Russian, and Spanish for international clients, handling diverse content from medical documentation and business plans to entertainment media like BBC's Top Gear, while maintaining cultural accuracy and brand voice consistency.",
          ],
        },
      ],
    },

    {
      company: "Farbik",
      link: "https://farbik.ru/",
      badges: ["Remote"],
      positions: [
        {
          title: "Web content editor",
          start: "Jun 2013",
          end: "Apr 2016",
          description: [
            "Led a team of 20+ copywriters and graphic designers to deliver high-quality content that provided users with learning materials and veritable answers to their most asked questions, and drove company revenue.",
            "Owned full content lifecycle: from SEO-driven content planning through final editing and publication of more than 4000 articles.",
            "Ensured all deliverables met usability standards and SEO requirements.",
          ],
        },
        /*{
          title: "Copywriter",
          start: "2012",
          end: "2013",
          description: [
            "Produced over 1,000 educational articles on various topics, ensuring style consistency, readability, and SEO compliance for maximum content performance and reader engagement.",
          ],
        }, */
      ],
    },
    // Add similar structure for other work entries...
  ] as Work[],

  skills: [
    "Software Troubleshooting",
    "Python",
    "SQL",
    "API Integration",
    "GIT",
    "JavaScript",
    "HTML",
    "CSS",
    "Data Analysis & Presentation",
    "Quality Assurance",
    "Workflow Building",
    "Customer Feedback Analysis",
    "Project Management",
    "Team Development",
    "Business Communications",
    "Technical & Creative Writing",
    "Chatbot Development",
    "CRM & Helpdesk Systems Administration",
    "Web Design",
    "Low/No-Code Development",
    "Prompt Engineering",
    "Stress Management",
    "Conflict Resolution",
    "Proactive Problem-Resolution",

  ] as Skills[],
  /*
  education: [
    {
      school: "Russian Law Academy of the Ministry of Justice",
      degree: "Bachelor's Degree in Civil Law",
      start: "",
      end: "",
    },
  ] as Education[],
  
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
  */
} as const;


