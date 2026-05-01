import Section from "../components/Section.jsx";
import { motion } from "framer-motion";
import SkillCategory from "../components/SkillCategory.jsx";
import SkillItem from "../components/SkillItem.jsx";
import { slideLeft, slideRight } from "../utils/animations.js";

import {
  languages,
  databases,
  tools,
  softSkills
} from "../data/skills.js";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-12 w-full">

        {/* Título */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            My <span className="text-[#D8B89D]">Skills</span>
          </h2>
          <p className="text-[#5C5F4F]">
            Technologies and tools I use to build solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

          {/* Divider */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />

          {/* HARD */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-3xl text-gray-200 font-medium text-center">
              Hard Skills
            </h3>

            <SkillCategory title="LANGUAGES" items={languages} />
            <SkillCategory title="DATABASES" items={databases} />
            <SkillCategory title="TOOLS" items={tools} />
          </motion.div>

          {/* SOFT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl text-gray-200 font-medium text-center">
              Soft Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {softSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </Section>
  );
}