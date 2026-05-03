import { motion } from "framer-motion";
import { projects } from "@/shared/data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import {
  projectsContainer,
  fadeUpContainer,
  fadeUpItem,
} from "@/shared/utils/animations.js";

export default function ProjectsDesktop() {
  return (
    <div className="grid grid-cols-[0.8fr_2fr] gap-12 w-full items-start">

      {/* IZQUIERDA */}
      <div className="flex flex-col justify-between h-full">

        {/* HEADER */}
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          className="flex flex-col gap-3"
        >
          <motion.h2 variants={fadeUpItem} className="text-5xl font-semibold">
            My <span className="text-[#D8B89D]">Projects</span>
          </motion.h2>

          <motion.p variants={fadeUpItem} className="text-[#A8A39A]">
            A selection of things I've built.
          </motion.p>
        </motion.div>

      </div>

      {/* DERECHA (CARDS) */}
      <motion.div
        variants={projectsContainer}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </motion.div>

    </div>
  );
}