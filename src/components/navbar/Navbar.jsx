import { useState, useRef, useEffect } from "react";
import { navLinks } from "../../data/navLinks";
import useActiveSection from "../../hooks/useActiveSection";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { active, scrollTo } = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const linksRef = useRef({});
  const [underline, setUnderline] = useState({});

  const updateUnderline = (id) => {
    const el = linksRef.current[id];
    if (!el) return;

    const width = 25;

    setUnderline({
      width,
      left: el.offsetLeft + el.offsetWidth / 2 - width / 2,
    });
  };

  useEffect(() => {
    updateUnderline(active);
  }, [active]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10">
      <div className="relative flex items-center justify-between mt-6">

        {/* LOGO */}
        <div className="text-gray-300 font-medium">
          Ramiro Alvarez
        </div>

        {/* DESKTOP */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="px-12 py-4 rounded-full bg-[#292929]/70 border border-white/10 backdrop-blur-md">
            
            <div className="relative flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  ref={(el) => (linksRef.current[link.id] = el)}
                  onClick={() => scrollTo(link.id)}
                  className={`
                    px-2 transition-all duration-300
                    ${
                      active === link.id
                        ? "text-[#D8B89D]"
                        : "text-gray-300 hover:text-[#D8B89D]"
                    }
                  `}
                >
                  {link.label}
                </button>
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
          <a
            href="/cv.pdf"
            download
            className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition"
          >
            Download CV
          </a>
        </div>

        {/* BURGER */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1"
          >
            <span className={`w-6 h-[2px] bg-white transition ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

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