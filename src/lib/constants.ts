import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SiX } from '@icons-pack/react-simple-icons';

export const LOCALES = ['en', 'ru'] as const;
export type Locale = typeof LOCALES[number];

export const iconComponents = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    x: SiX,
};