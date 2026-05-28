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
import springLogo from "/icons/hard-skills/springlogo.svg"
import postgresqlLogo from "/icons/hard-skills/postgresqllogo.svg"
import fastapiLogo from "/icons/hard-skills/fastapilogo.svg"

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
    title: "Geolocation API",
    description: "Routing API for computing and comparing real routes and distances across a city using graph algorithms and efficient data modeling.",
    logo: geolocalization,
    repo: "https://github.com/alvarezzramiro/Geolocation-API",
    technologies: [ 
      { name: "GoLang", icon: gologo },
      { name: "Neo4j", icon: neo4jlogo },
      { name: "Redis", icon: redislogo },
      { name: "Docker", icon: dockerlogo }
    ],
  },
  {
    title: "X-Ray Fracture Detection",
    description: "AI-powered platform that detects bone fractures in X-rays and transforms them into interactive 3D models for clear patient understanding. Currently under active development.",
    logo: recommendation,
    repo: "#",
    technologies: [  
      { name: "Python", icon: pythonlogo },
      { name: "FastAPI", icon: fastapiLogo },
      { name: "Postgre SQL", icon: postgresqlLogo },
      { name: "Docker", icon: dockerlogo },
      { name: "Unity", icon: unitylogo }
    ],
  },
  {
    title: "Finance API",
    description: "Personal finance management platform in development with secure authentication, analytics and expense tracking.",
    logo: ar,
    repo: "https://github.com/alvarezzramiro/Finance",
    technologies: [
      { name: "Java", icon: javalogo },
      { name: "Spring", icon: springLogo },
      { name: "PostgreSQL", icon: postgresqlLogo }
    ],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built to showcase my projects, skills, and background, with a focus on clean design and structured presentation.",
    logo: portfolio,
    repo: "https://github.com/alvarezzramiro/Portfolio",
    technologies: [ 
      { name: "React", icon: reactlogo }, 
      { name: "JavaScript", icon: jslogo }
    ],
  },
];