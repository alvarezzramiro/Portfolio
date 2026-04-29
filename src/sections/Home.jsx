import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // easing suave (easeOutCubic pro)
      },
    },
  };
  
  return (
    <Section id="home">
      
      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-col gap-10 md:gap-12"
        >

        {/* Nombre */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
        >
          Ramiro{" "}
          <span className="text-[#D8B89D]">
            Alvarez
          </span>
        </motion.h1>

        {/* Rol */}
        <motion.h2
          variants={item}
          className="text-lg md:text-2xl text-[#5C5F4F] tracking-wide"
        >
          Backend Developer
        </motion.h2>

        {/* Descripción */}
        <motion.p
          variants={item}
          className="text-gray-300 max-w-xl leading-relaxed text-base md:text-lg"
        >
          Descripcion
        </motion.p>

      </motion.div>

      {/* DERECHA */}
      <div className="hidden md:block" />

      </div>
    </Section>
  );
}