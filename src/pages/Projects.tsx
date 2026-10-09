import { ProjectBrowser } from "../components/projects/ProjectBrowser";
import { Section, SectionHeading } from "../components/ui/Bits";
import { useSeo } from "../hooks/useSeo";

export default function Projects() {
  useSeo("Projects — Israel Adedayo");
  return (
    <div className="pt-16">
      <Section>
        <SectionHeading
          title="All projects"
          sub="Filter by what each project involved."
        />
        <ProjectBrowser />
      </Section>
    </div>
  );
}
