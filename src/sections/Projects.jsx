import Section from "../components/Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  { title: "Project One", description: "Description", logo: "🛠️", repo: "#" },
  { title: "Project Two", description: "Description", logo: "⚙️", repo: "#" },
  { title: "Project Three", description: "Description", logo: "🚀", repo: "#" },
  { title: "Project Four", description: "Description", logo: "📊", repo: "#" },
];

function ProjectCard({ title, description, logo, repo, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    rootMargin: "-100px", // activa antes de entrar del todo
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="group relative flex flex-col gap-5 p-6 rounded-2xl
        border border-white/10 bg-[#2a2a2a]
        hover:border-[#D8B89D]/40
        transition-colors duration-150
        will-change-transform"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
        transition-opacity duration-150
        bg-gradient-to-br from-[#D8B89D]/10 to-transparent pointer-events-none" />

      {/* Logo */}
      <div className="text-3xl w-12 h-12 flex items-center justify-center
        rounded-xl border border-white/10 bg-[#303030]">
        {logo}
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold text-gray-100">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>

      {/* Link */}
      <a
        href={repo}
        className="text-sm text-[#D8B89D] hover:text-white transition-colors duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        View repository →
      </a>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-12 w-full">

        <div className="flex flex-col gap-3">
          <h2 className="text-4xl md:text-5xl font-semibold">
            My <span className="text-[#D8B89D]">Projects</span>
          </h2>
          <p className="text-[#5C5F4F]">
            A selection of things I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>

      </div>
    </Section>
  );
}