import Section from "../components/Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import githubLogo from "/icons/hard-skills/githublogo.svg";

const projects = [
  { title: "Project One", description: "Description", logo: "", repo: "#" },
  { title: "Project Two", description: "Description", logo: "", repo: "#" },
  { title: "Project Three", description: "Description", logo: "", repo: "#" },
  { title: "Project Four", description: "Description", logo: "", repo: "#" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ProjectCard({ title, description, logo, repo, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    rootMargin: "-100px", // activa antes de entrar del todo
  });
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: {
          duration: 0.15,
        },
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
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="
          flex items-center gap-2
          text-sm text-gray-400
          group/link
          transition-all duration-200
        "
      >
        <img
          src={githubLogo}
          alt="GitHub"
          className="
            w-4 h-4 opacity-70
            group-hover/link:opacity-100
            group-hover/link:scale-110
            transition
          "
        />

        <span className="group-hover/link:text-[#D8B89D] transition">
          View repository →
        </span>
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