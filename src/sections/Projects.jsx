import Section from "../components/Section";
import { motion } from "framer-motion";
import githubLogo from "/icons/hard-skills/githublogo.svg";
import { projectsContainer, projectCardVariants } from "../utils/animations.js"
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  { title: "Project One", description: "Description", logo: "", repo: "#" },
  { title: "Project Two", description: "Description", logo: "", repo: "#" },
  { title: "Project Three", description: "Description", logo: "", repo: "#" },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-12 w-full">

        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-5xl font-semibold">
            My <span className="text-[#D8B89D]">Projects</span>
          </h2>
          <p className="text-[#5C5F4F]">
            A selection of things I've built.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={projectsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </motion.div>

      </div>
    </Section>
  );
}