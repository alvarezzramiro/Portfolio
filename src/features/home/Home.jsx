import Section from "@/shared/components/Section.jsx";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/shared/utils/animations.js";

const titleClass =
  "text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight whitespace-nowrap";

const subtitleClass =
  "text-lg md:text-2xl text-[#A8A39A] tracking-wide";

const textClass =
  "text-gray-300 max-w-xl leading-relaxed text-base md:text-lg";

export default function Home() {
  return (
    <Section id="home" centered>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

        {/* TEXTO */}
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-10 md:gap-12 items-center lg:items-start text-center lg:text-left"
        >
          <motion.h1 variants={fadeUpItem} className={titleClass}>
            <span className="text-gray-200"> Ramiro </span>
            <span className="text-[#D8B89D]">Alvarez Zulaica</span>
          </motion.h1>

          <motion.h2 variants={fadeUpItem} className={`${subtitleClass} whitespace-nowrap`}>
            Backend Developer | Software Engineering Student
          </motion.h2>

          <motion.p variants={fadeUpItem} className={textClass}>
            Turning complexity into scalable solutions.
          </motion.p>
        </motion.div>

        {/* IMAGEN (solo desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="transform-gpu will-change-transform"
          >
            <img
              src={`${import.meta.env.BASE_URL}image/illustration.png`}
              alt="Illustration"
              className="w-[540px] opacity-60"
            />
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}