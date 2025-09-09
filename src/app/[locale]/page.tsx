export const dynamicParams = true;

import ResumeClientPage from "./resume-client-page";
import { getResumeData } from "@/data/resume-data";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resumeData = await getResumeData(locale);
  return <ResumeClientPage locale={locale} resumeData={resumeData} />;
}