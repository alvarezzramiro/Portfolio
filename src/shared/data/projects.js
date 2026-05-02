import { p } from "framer-motion/client";
import compiler from "/icons/projects/compiler.svg"
import geolocalization from "/icons/projects/geolocalization.svg"
import portfolio from "/icons/projects/portfolio.svg"
import ar from "/icons/projects/ar.svg"
import recommendation from "/icons/projects/recommendation.svg"

export const projects = [
  {
    title: "Compiler",
    description: "A Java-based compiler implementing lexical, syntactic and semantic analysis with intermediate code generation and structured error handling.",
    logo: compiler,
    repo: "https://github.com/alvarezzramiro/Compilador-en-Java",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built to showcase projects and skills, with a focus on clean design and structured presentation.",
    logo: portfolio,
    repo: "https://github.com/alvarezzramiro/Portfolio",
  },
  {
    title: "Geolocalization API",
    description: "In progress...",
    logo: geolocalization,
    repo: "#",
  },
  {
    title: "AR App",
    description: "In progress...",
    logo: ar,
    repo: "#",
  },
  {
    title: "Recomendation system",
    description: "In progress...",
    logo: recommendation,
    repo: "#",
  },
];