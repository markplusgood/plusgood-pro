import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { getResumeData } from "../data/resume-data";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  async me(): Promise<Me> {
    const resumeData = await getResumeData('en');
    return resumeData as any;
  }
}
