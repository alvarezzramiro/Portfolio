import { motion } from "framer-motion";
import { skillsItem } from "../utils/animations.js";

export default function SkillItem({ name, icon, size = "w-7 h-7" }) {
  return (
    <motion.div
      variants={skillsItem}
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: { duration: 0.15 }
      }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 bg-[#2a2a2a]
        group-hover:border-[#D8B89D]/40 transition-all duration-150"
      >
        <img
          src={icon}
          alt={name}
          className={`${size} opacity-80 group-hover:opacity-100 transition`}
        />
      </div>

      <span className="text-xs text-gray-400 group-hover:text-gray-200 transition text-center">
        {name}
      </span>
    </motion.div>
  );
}