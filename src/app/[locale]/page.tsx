export const dynamicParams = true;

import ResumeClientPage from "./resume-client-page";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ResumeClientPage locale={locale} resumeData={null} />;
}