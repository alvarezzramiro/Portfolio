import Section from "../components/Section";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "../utils/animations.js"

const titleClass = "text-5xl md:text-7xl font-semibold tracking-tight leading-tight";
const subtitleClass = "text-lg md:text-2xl text-[#5C5F4F] tracking-wide";
const textClass = "text-gray-300 max-w-xl leading-relaxed text-base md:text-lg";

export default function Home() {
  return (
    <Section id="home">
      
      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-col gap-10 md:gap-12"
        >

        {/* Nombre */}
        <motion.h1 variants={fadeUpItem} className={titleClass}>
          Ramiro{" "}
          <span className="text-[#D8B89D]"> Alvarez </span>
        </motion.h1>

        {/* Rol */}
        <motion.h2 variants={fadeUpItem} className={subtitleClass}>
          Backend Developer
        </motion.h2>

        {/* Descripción */}
        <motion.p variants={fadeUpItem} className={textClass}>
          Descripcion
        </motion.p>

      </motion.div>

      {/* DERECHA */}
      <div className="hidden md:block" />

      </div>
    </Section>
  );
}