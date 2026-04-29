import Section from "../components/Section";
import { motion } from "framer-motion";

export default function About() {

  const fadeLeft = {
    hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
    show: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const staggerItem = {
    hidden: { opacity: 0, x: 40, filter: "blur(4px)" },
    show: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const datos = [
    { label: "Age",      value: "23" },
    { label: "Location", value: "Tandil, Buenos Aires, Argentina" },
    { label: "Focus",    value: "Software developing" },
  ];

  const education = [
    { year: "2021 – present", title: "Computer Science", place: "Universidad X" },
    { year: "2020",           title: "Curso Y",          place: "Plataforma Z" },
  ];

  const languages = [
    { lang: "Spanish", level: "Native" },
    { lang: "English", level: "Advanced" },
  ];

  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">

        {/* IZQUIERDA — Foto + datos debajo */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col items-center lg:items-start gap-6"
        >

          {/* Foto */}
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#D8B89D]/30" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#292929]">
              {/* Reemplazá por <img src="..." className="w-full h-full object-cover" /> */}
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                Photo
              </div>
            </div>
          </div>

          {/* Datos debajo de la foto */}
          <div className="grid grid-cols-1 gap-3 w-full max-w-xs">
            {datos.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-xs text-[#5C5F4F] tracking-widest uppercase">{label}</span>
                <span className="text-gray-200 text-sm font-medium">{value}</span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* DERECHA — Bio + Education + Languages */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-col gap-8"
        >

          {/* About */}
          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              About <span className="text-[#D8B89D]">me</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-lg">
              Bio
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[#D8B89D] tracking-wide">
              Education
            </h3>
            <div className="flex flex-col gap-3">
              {education.map(({ year, title, place }) => (
                <div key={title} className="flex flex-col gap-0.5">
                  <span className="text-xs text-[#5C5F4F] tracking-widest uppercase">{year}</span>
                  <span className="text-gray-200 text-sm font-medium">{title}</span>
                  <span className="text-gray-400 text-sm">{place}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={staggerItem} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[#D8B89D] tracking-wide">
              Languages
            </h3>
            <div className="flex flex-col gap-3">
              {languages.map(({ lang, level }) => (
                <div key={lang} className="flex flex-col gap-0.5">
                  <span className="text-gray-200 text-sm font-medium">{lang}</span>
                  <span className="text-xs text-[#5C5F4F] tracking-widest uppercase">{level}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </Section>
  );
}