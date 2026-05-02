import Section from "@/shared/components/Section.jsx";
import ProjectsDesktop from "./ProjectsDesktop.jsx";
import ProjectsMobile from "./ProjectsMobile.jsx";

export default function Projects() {
  return (
    <Section id="projects" centered>
      
      {/* Mobile */}
      <div className="lg:hidden">
        <ProjectsMobile />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block ">
        <ProjectsDesktop />
      </div>

    </Section>
  );
}