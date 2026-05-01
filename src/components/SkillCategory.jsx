import { motion } from "framer-motion";
import SkillItem from "./SkillItem.jsx";
import { skillsContainer } from "../utils/animations.js";

export default function SkillCategory({ title, items }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h4 className="text-lg tracking-widest text-gray-400 text-center">
        {title}
      </h4>

      <motion.div
        variants={skillsContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-6 max-w-lg"
      >
        {items.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </motion.div>
    </div>
  );
}