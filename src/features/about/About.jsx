import Section from "@/shared/components/Section.jsx";
import { motion } from "framer-motion";
import { datos, education, languages } from "@/shared/data/about.js"
import {
  fadeLeftVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/shared/utils/animations.js";

const labelClass = "text-xs text-[#5C5F4F] tracking-widest uppercase";
const valueClass = "text-gray-200 text-sm font-medium";

function InfoBlock({ title, children }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-[#D8B89D] tracking-wide">
        {title}
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" centered>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center justify-items-center">

        {/* IZQUIERDA */}
        <motion.div
          variants={fadeLeftVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col items-center lg:items-start gap-6"
        >
          {/* Foto */}
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#D8B89D]/30" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#292929]">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Datos */}
          <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
            {datos.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <span className={labelClass}>{label}</span>
                <span className={valueClass}>{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DERECHA */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-10"
        >
          {/* About */}
          <motion.div variants={staggerItemVariants} className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              About <span className="text-[#D8B89D]">me</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-lg whitespace-pre-line">
              {`I’m an advanced Software Engineering student focused on backend development and scalable systems design.

              I’m interested in understanding how systems work internally, not just using them. That’s why I focus on clean architecture, performance and well-structured solutions.

              Through my projects, I aim to design and build systems that are reliable, maintainable and prepared to scale.`}
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={staggerItemVariants}>
            <InfoBlock title="Education">
              {education.map(({ year, title, place }) => (
                <div key={title} className="flex flex-col gap-0.5">
                  <span className={labelClass}>{year}</span>
                  <span className={valueClass}>{title}</span>
                  <span className="text-gray-400 text-sm">{place}</span>
                </div>
              ))}
            </InfoBlock>
          </motion.div>

          {/* Languages */}
          <motion.div variants={staggerItemVariants}>
            <InfoBlock title="Languages">
              {languages.map(({ lang, level }) => (
                <div key={lang} className="flex flex-col gap-0.5">
                  <span className={valueClass}>{lang}</span>
                  <span className={labelClass}>{level}</span>
                </div>
              ))}
            </InfoBlock>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}