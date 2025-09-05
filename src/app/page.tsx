import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import ResumeClientPage from "./resume-client-page";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return <ResumeClientPage />;
}