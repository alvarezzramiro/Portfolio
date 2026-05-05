import { p } from "framer-motion/client";

import compiler from "/icons/projects/compiler.svg"
import geolocalization from "/icons/projects/geolocalization.svg"
import portfolio from "/icons/projects/portfolio.svg"
import ar from "/icons/projects/ar.svg"
import recommendation from "/icons/projects/recommendation.svg"

import javalogo from "/icons/hard-skills/javalogo.svg"
import reactlogo from "/icons/hard-skills/reactlogo.svg"
import jslogo from "/icons/hard-skills/jslogo.svg"
import gologo from "/icons/hard-skills/gologo.svg"
import dockerlogo from "/icons/hard-skills/dockerlogo.svg"
import neo4jlogo from "/icons/hard-skills/neo4jlogo.svg"
import pythonlogo from "/icons/hard-skills/pythonlogo.svg"
import csharplogo from "/icons/hard-skills/csharplogo.svg"
import unitylogo from "/icons/hard-skills/unitylogo.svg"
import redislogo from "/icons/hard-skills/redislogo.svg"

export const projects = [
  {
    title: "Compiler",
    description: "A Java-based compiler implementing lexical, syntactic and semantic analysis with intermediate code generation and structured error handling.",
    logo: compiler,
    repo: "https://github.com/alvarezzramiro/Compilador-en-Java",
    technologies: [ 
      { name: "Java", icon: javalogo },
      { name: "YACC", icon: "" },
    ],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built to showcase projects and skills, with a focus on clean design and structured presentation.",
    logo: portfolio,
    repo: "https://github.com/alvarezzramiro/Portfolio",
    technologies: [ 
      { name: "React", icon: reactlogo }, 
      { name: "JavaScript", icon: jslogo }
    ],
  },
  {
    title: "Geolocation API",
    description: "Project under development for computing and comparing routes and distances across a city using graph algorithms and efficient data modeling.",
    logo: geolocalization,
    repo: "https://github.com/alvarezzramiro/Geolocation-API",
    technologies: [ 
      { name: "GoLang", icon: gologo },
      { name: "Docker", icon: dockerlogo },
      { name: "Neo4j", icon: neo4jlogo },
      { name: "Redis", icon: redislogo }
    ],
  },
  {
    title: "AR App",
    description: "In progress...",
    logo: ar,
    repo: "#",
    technologies: [
      { name: "Unity", icon: unitylogo },
      { name: "C#", icon: csharplogo }
    ],
  },
  {
    title: "Recomendation system",
    description: "In progress...",
    logo: recommendation,
    repo: "#",
    technologies: [  
      { name: "Python", icon: pythonlogo },
    ],
  },
];