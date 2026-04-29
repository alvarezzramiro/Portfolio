import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const [underlineStyle, setUnderlineStyle] = useState({});
  const linksRef = useRef({});

  const isScrolling = useRef(false);

  const updateUnderline = (id) => {
    const el = linksRef.current[id];
    if (el) {
      const width = 25;

      setUnderlineStyle({
        width,
        left: el.offsetLeft + el.offsetWidth / 2 - width / 2,
      });
    }
  };

  useEffect(() => {
    updateUnderline(active);
  }, [active]);

  const handleScroll = (id) => (e) => {
    e.preventDefault();

    isScrolling.current = true;

    setActive(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800); // duración del scroll

    window.history.replaceState(null, "", window.location.pathname);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && !isScrolling.current) {
          setActive(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) => `
    relative px-4 cursor-pointer
    transition-all duration-300 ease-out
    tracking-wide
    ${
      active === id
        ? "text-[#D8B89D] tracking-wider"
        : "text-gray-300 hover:text-[#D8B89D] hover:tracking-wider"
    }
  `;
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10">

      {/* CONTENEDOR GENERAL */}
      <div className="relative flex items-center justify-between mt-6">

        {/* IZQUIERDA */}
        <div style={{ fontSize: "clamp(0.7rem, 2vw, 1rem)" }} className="text-gray-300 font-medium">
          <span className="hover:text-white transition-colors duration-300 cursor-default">
            Ramiro Alvarez Zulaica
          </span>
        </div>

        {/* CENTRO (ABSOLUTO) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="
            px-12 py-4
            rounded-full
            backdrop-blur-md
            bg-[#292929]/70
            border border-white/10
            shadow-lg
          ">
            
            <ul className="relative flex items-center justify-center text-base md:text-lg font-medium text-gray-300">

              <li>
                <a
                  ref={(el) => (linksRef.current["home"] = el)}
                  href="#home" 
                  onClick={handleScroll("home")} 
                  className={`${linkClass("home")} 
                  relative`}
                >
                  Home
                </a>
              </li>

              <span className="w-[1px] h-5 bg-white/10" />

              <li>
                <a
                  ref={(el) => (linksRef.current["about"] = el)}
                  href="#about" 
                  onClick={handleScroll("about")} 
                  className={`${linkClass("about")} relative`}
                >
                  About
                </a>
              </li>

              <span className="w-[1px] h-5 bg-white/10" />

              <li>
                <a 
                  ref={(el) => (linksRef.current["projects"] = el)}
                  href="#projects" 
                  onClick={handleScroll("projects")} 
                  className={`${linkClass("projects")} relative`}
                >
                  Projects
                </a>
              </li>

              <span className="w-[1px] h-5 bg-white/10" />

              <li>
                <a
                  ref={(el) => (linksRef.current["skills"] = el)}
                  href="#skills" 
                  onClick={handleScroll("skills")} 
                  className={`${linkClass("skills")} relative`}
                >
                  Skills
                </a>
              </li>

              <span className="w-[1px] h-5 bg-white/10" />

              <li>
                <a
                  ref={(el) => (linksRef.current["contact"] = el)}
                  href="#contact" 
                  onClick={handleScroll("contact")} 
                  className={`${linkClass("contact")} relative`}
                >
                  Contact
                </a>
              </li>
              <span
                className="
                  absolute -bottom-1 h-[1px]
                  bg-[#D8B89D]
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
                style={underlineStyle}
              />
            </ul>

          </div>
        </div>

        {/* DERECHA */}
        <div>
          <a
            href="/cv.pdf" // COMPLETAR CON CV
            download
            className="
              text-sm md:text-base
              px-5 py-2.5
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-md
              text-gray-300
              hover:text-white
              hover:bg-white/10
              transition-all duration-300
              hidden lg:block
            "
          >
            Download CV
          </a>
        </div>
        <div className="lg:hidden mr-6">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-14 h-14 flex flex-col justify-center items-center z-50 gap-2"
          >
            <span 
              className={`
                absolute w-10 h-[2px] bg-white transition-all duration-300
                ${menuOpen ? "rotate-45" : "-translate-y-2"}
              `} />
            <span 
              className={`
                absolute w-10 h-[2px] bg-white transition-all duration-300
                ${menuOpen ? "opacity-0" : ""}
              `} />
            <span 
              className={`
                absolute w-10 h-[2px] bg-white transition-all duration-300
                ${menuOpen ? "-rotate-45" : "translate-y-2"}
              `} />
          </button>
        </div>

      </div>
      
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {menuOpen && (
        <div 
          className="
            lg:hidden
            mt-4 mx-4
            rounded-2xl
            backdrop-blur-md
            bg-[#292929]/90
            border border-white/10
            shadow-lg
            p-6
            animate-in fade-in slide-in-from-top-2 duration-300
            relative z-50
          "
        >
          <ul className="flex flex-col gap-4 text-gray-300 text-base">

            <li>
              <a onClick={handleScroll("home")} className={linkClass("home")}>
                Home
              </a>
            </li>

            <li>
              <a onClick={handleScroll("about")} className={linkClass("about")}>
                About
              </a>
            </li>

            <li>
              <a onClick={handleScroll("projects")} className={linkClass("projects")}>
                Projects
              </a>
            </li>

            <li>
              <a onClick={handleScroll("skills")} className={linkClass("skills")}>
                Skills
              </a>
            </li>

            <li>
              <a onClick={handleScroll("contact")} className={linkClass("contact")}>
                Contact
              </a>
            </li>

            <div className="pt-4 border-t border-white/10">
              <a
                href="/cv.pdf"
                download
                className="block text-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                Download CV
              </a>
            </div>

          </ul>
        </div>
      )}

    </nav>
  );
}

