import Section from "../components/Section";
import { motion } from "framer-motion";

import javaLogo from "/icons/hard-skills/javalogo.svg"
import pythonLogo from "/icons/hard-skills/pythonlogo.svg"
import cppLogo from "/icons/hard-skills/cpplogo.svg"
import goLogo from "/icons/hard-skills/gologo.svg"
import reactLogo from "/icons/hard-skills/reactlogo.svg"

import postgresqlLogo from "/icons/hard-skills/postgresqllogo.svg"
import mongodbLogo from "/icons/hard-skills/mongodblogo.svg";

import gitLogo from "/icons/hard-skills/gitlogo.svg";
import githubLogo from "/icons/hard-skills/githublogo.svg";
import jiraLogo from "/icons/hard-skills/jiralogo.svg";
import dockerLogo from "/icons/hard-skills/dockerlogo.svg";

import problemsolvingLogo from "/icons/soft-skills/problemsolving.svg"
import communicationLogo from "/icons/soft-skills/communication.svg"
import teamworkLogo from "/icons/soft-skills/teamwork.svg"
import adaptabilityLogo from "/icons/soft-skills/adaptability.svg"

// Animación contenedor (stagger limpio)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

// Animación items (rápida y suave)
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const languages = [
  { name: "Java", icon: javaLogo, size: "w-9 h-9" },
  { name: "Python", icon: pythonLogo },
  { name: "C++", icon: cppLogo },
  { name: "GoLang", icon: goLogo, size: "w-10 h-10" },
  { name: "React", icon: reactLogo },
];

const databases = [
  { name: "PostgreSQL", icon: postgresqlLogo },
  { name: "MongoDB", icon: mongodbLogo, size: "w-12 h-12" },
];

const tools = [
  { name: "Git", icon: gitLogo },
  { name: "GitHub", icon: githubLogo },
  { name: "Jira", icon: jiraLogo },
  { name: "Docker", icon: dockerLogo },
];

const softSkills = [
  { name: "Problem Solving", icon: problemsolvingLogo },
  { name: "Communication", icon: communicationLogo },
  { name: "Teamwork", icon: teamworkLogo },
  { name: "Adaptability", icon: adaptabilityLogo },
];

function SkillItem({ name, icon, index, size }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      className="flex flex-col items-center gap-2 group"
    >
      <div
        className="
          w-14 h-14
          flex items-center justify-center
          rounded-xl
          border border-white/10
          bg-[#2a2a2a]
          group-hover:border-[#D8B89D]/40
          transition-all duration-150
        "
      >
        <img
          src={icon}
          alt={name}
          className={`
            ${size || "w-7 h-7"}
            opacity-80 
            group-hover:opacity-100 
            transition
          `}
        />
      </div>

      <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors text-center">
        {name}
      </span>
    </motion.div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="flex flex-col gap-4">

      <h3 className="text-sm uppercase tracking-wider text-gray-500">
        {title}
      </h3>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5
          gap-4
        "
      >
        {items.map((item) => (
          <SkillItem key={item} name={item} />
        ))}
      </motion.div>

    </div>
  );
}

export default function Skills() {

  const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section id="skills" key={window.location.hash}>
      <div className="flex flex-col gap-12 w-full">

        {/* TÍTULO */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            My <span className="text-[#D8B89D]">Skills</span>
          </h2>
          <p className="text-[#5C5F4F]">
            Technologies and tools I use to build solutions.
          </p>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">

          {/* Línea divisoria */}
          <div className="
            hidden lg:block
            absolute top-0 bottom-0 left-1/2 -translate-x-1/2
            w-px bg-white/10
          " />
          
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

            {/* LANGUAGES */}
            <div className="flex flex-col gap-4 items-center">
              <h4 className="text-lg tracking-widest text-gray-400 text-center">
                LANGUAGES
              </h4>

              <div className="flex flex-wrap justify-center gap-6 max-w-lg">
                {languages.map((skill, i) => (
                  <SkillItem key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>

            {/* DATABASES */}
            <div className="flex flex-col gap-4 items-center">
              <h4 className="text-lg tracking-widest text-gray-400">
                DATABASES
              </h4>

              <div className="flex flex-wrap justify-center gap-6 max-w-lg">
                {databases.map((skill, i) => (
                  <SkillItem key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div className="flex flex-col gap-4 items-center">
              <h4 className="text-lg tracking-widest text-gray-400">
                TOOLS
              </h4>

              <div className="flex flex-wrap justify-center gap-6 max-w-lg">
                {tools.map((skill, i) => (
                  <SkillItem key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>

          </motion.div>

          {/* SOFT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="flex flex-col gap-6"
          >

            <h3 className="text-3xl text-gray-200 font-medium text-center">
              Soft Skills
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {softSkills.map((skill, i) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={i}
                />
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </Section>
  );
}