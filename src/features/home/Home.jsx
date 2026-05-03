import Section from "@/shared/components/Section.jsx";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/shared/utils/animations.js";

const titleClass =
  "text-5xl md:text-7xl font-semibold tracking-tight leading-tight";

const subtitleClass =
  "text-lg md:text-2xl text-[#A8A39A] tracking-wide";

const textClass =
  "text-gray-300 max-w-xl leading-relaxed text-base md:text-lg";

export default function Home() {
  return (
    <Section id="home" centered>
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col gap-10 md:gap-12 items-center md:items-start text-center md:text-left"
      >
        <motion.h1 variants={fadeUpItem} className={titleClass}>
          Ramiro{" "}
          <span className="text-[#D8B89D]">Alvarez Zulaica</span>
        </motion.h1>

        <motion.h2 variants={fadeUpItem} className={subtitleClass}>
          Backend Developer | Software Engeneering Student
        </motion.h2>

        <motion.p variants={fadeUpItem} className={textClass}>
          Turning complexity into scalable solutions.
        </motion.p>
      </motion.div>
    </Section>
  );
}