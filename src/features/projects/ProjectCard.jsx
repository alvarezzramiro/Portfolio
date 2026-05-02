import { motion } from "framer-motion";
import githubLogo from "/icons/hard-skills/githublogo.svg";
import { projectCardVariants } from "@/shared/utils/animations";

export default function ProjectCard({ title, description, logo, repo, index }) {
  return (
    <motion.div
      custom={index}
      variants={projectCardVariants}
      className="
        group relative flex flex-col gap-5 p-6 rounded-2xl
        border border-white/10 bg-[#2a2a2a]
        h-full max-w-[320px] w-full min-h-[260px]
        hover:border-[#D8B89D]/40
        transition-colors duration-150
        will-change-transform
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
          transition-opacity duration-150
          bg-gradient-to-br from-[#D8B89D]/10 to-transparent pointer-events-none
        "
      />

      {/* Logo */}
      {logo && (
        <img
          src={logo}
          alt={title}
          className="w-6 h-6 opacity-80 group-hover:opacity-100 transition"
        />
      )}

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
        className="inline-flex items-center gap-2 w-fit text-sm text-gray-400 group/link transition-all duration-200"
      >
        <img
          src={githubLogo}
          alt="GitHub"
          className="w-4 h-4 opacity-70 group-hover/link:opacity-100 group-hover/link:scale-110 transition"
        />

        <span className="group-hover/link:text-[#D8B89D] transition">
          View repository
        </span>
      </a>
    </motion.div>
  );
}