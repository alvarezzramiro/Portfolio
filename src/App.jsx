import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

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
