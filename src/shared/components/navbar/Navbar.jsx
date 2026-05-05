import { useState, useRef, useEffect } from "react";
import { navLinks } from "../../data/navLinks";
import useActiveSection from "../../hooks/useActiveSection";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { createPortal } from "react-dom";

export default function Navbar() {
  const { active, scrollTo } = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const linksRef = useRef({});
  const [underline, setUnderline] = useState({});

  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cvRef.current && !cvRef.current.contains(e.target)) {
        setCvOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateUnderline = (id) => {
    const el = linksRef.current[id];
    const container = el?.parentElement?.parentElement;

    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const width = 25;

    setUnderline({
      width,
      left:
        elRect.left -
        containerRect.left +
        elRect.width / 2 -
        width / 2,
    });
  };

  useEffect(() => {
    // Recalcular al terminar la transición del texto (tracking cambia el ancho)
    const el = linksRef.current[active];
    if (!el) return;

    const handleTransitionEnd = () => updateUnderline(active);
    el.addEventListener("transitionend", handleTransitionEnd);

    // También recalcular inmediatamente
    updateUnderline(active);

    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [active]);

  return (
    <nav 
      className="
        fixed top-0 left-0 w-full z-[118] px-6 lg:px-10

        /* MOBILE BACKGROUND */
        bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/40 to-transparent
        backdrop-blur-sm

        /* DESKTOP limpio */
        lg:bg-transparent lg:[backdrop-filter:none]
      "
    >
      <div className="relative flex items-center justify-between mt-6">

        {/* LOGO */}
        <div className="text-gray-300 font-medium">
          Ramiro Alvarez Zulaica
        </div>

        {/* DESKTOP */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="px-12 py-4 rounded-full bg-[#292929]/70 border border-white/10 backdrop-blur-md">
            
            <div className="relative flex items-center">
              {navLinks.map((link, i) => (
                <div key={link.id} className="flex items-center">
                  
                  {/* BOTÓN */}
                  <button
                    ref={(el) => (linksRef.current[link.id] = el)}
                    onClick={() => scrollTo(link.id)}
                    className={`
                      px-3 transition-all duration-300
                      ${
                        active === link.id
                          ? "text-[#D8B89D] tracking-[0.08em]"
                          : "text-gray-300 hover:text-[#D8B89D] hover:tracking-[0.08em]"
                      }
                    `}
                  >
                    {link.label}
                  </button>

                  {/* SEPARADOR */}
                  {i < navLinks.length - 1 && (
                    <span className="w-px h-4 bg-white/10 mx-2" />
                  )}

                </div>
              ))}

              {/* underline */}
              <span
                className="absolute -bottom-1 h-[1px] bg-[#D8B89D] transition-all duration-500"
                style={underline}
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">
          <div className="relative" ref={cvRef}>

            {/* BOTÓN */}
            <button
              onClick={() => setCvOpen((prev) => !prev)}
              className="
                px-5 py-2.5 rounded-full
                border border-white/10
                bg-white/5 text-gray-300
                hover:bg-white/10
                transition
              "
            >
              Download CV
            </button>

            {/* DROPDOWN */}
            <div
              className={`
                absolute left-1/2 -translate-x-1/2 top-full pt-2
                flex flex-col
                transition-all duration-200 ease-out origin-top
                ${
                  cvOpen
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                }
              `}
            >
              <div className="bg-[#292929]/90 backdrop-blur-md border border-white/10 rounded-xl p-2 flex flex-col gap-1 shadow-lg">
                <span className="text-[10px] uppercase tracking-widest text-[#A8A39A]/70 px-1 text-center">
                  Select language
                </span>
                
                <div className="h-px bg-white/10 my-1" />

                <a
                  href={`${import.meta.env.BASE_URL}CV/Ramiro_Alvarez_Zulaica_Resume.pdf`}
                  download
                  className="px-4 py-2 text-sm text-gray-300 hover:text-[#D8B89D] transition rounded-lg"
                >
                  English
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}CV/Ramiro_Alvarez_Zulaica_CV.pdf`}
                  download
                  className="px-4 py-2 text-sm text-gray-300 hover:text-[#D8B89D] transition rounded-lg"
                >
                  Spanish
                </a>

              </div>
            </div>

          </div>
        </div>
        
        <div className="lg:hidden w-10 h-10" />

        {/* BURGER */}
        {createPortal(
          <div
            className="lg:hidden fixed z-[119]"
            style={{ top: "1.5rem", right: "1.5rem" }}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1"
            >
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>,
          document.body
        )}

      </div>

      <MobileMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        links={navLinks}
        active={active}
        scrollTo={scrollTo}
      />
    </nav>
  );
}