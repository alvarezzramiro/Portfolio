import { useState } from 'react'
import './App.css'
import Navbar from "./shared/components/navbar/Navbar";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <div className="relative">

      {/* FONDO GLOBAL */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#292929] via-[#3a3a3a] to-[#1a1a1a]" />
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-[#5C5F4F] opacity-40 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#4E3C3B] opacity-40 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </div>
  );
}


export default App;
