import { useState } from "react";
import { createPortal } from "react-dom";
import NavLinks from "./NavLinks";

export default function MobileMenu({ open, setOpen, links, active, scrollTo }) {
  const [cvOpen, setCvOpen] = useState(false);

  if (!open) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[#0f0f0f]/60 backdrop-blur-md z-[115]"
        onClick={() => setOpen(false)}
      />

      {/* Menu */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md p-6 rounded-2xl bg-[#292929]/95 border border-white/10 z-[116]">
        
        <NavLinks
          links={links}
          active={active}
          onClick={(id) => {
            scrollTo(id);
            setOpen(false);
          }}
          vertical
        />

        {/* CV SECTION */}
        <div className="pt-4 mt-4 border-t border-white/10">
          <button
            onClick={() => setCvOpen(!cvOpen)}
            className="w-full text-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-gray-300"
          >
            Download CV
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${cvOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[10px] uppercase tracking-widest text-[#A8A39A]/70">
                Select language
              </span>
              <a href={`${import.meta.env.BASE_URL}CV/Ramiro_Alvarez_Zulaica_Resume.pdf`} download className="px-4 py-2 text-sm text-gray-300 hover:text-[#D8B89D] transition">
                English
              </a>
              <a href={`${import.meta.env.BASE_URL}CV/Ramiro_Alvarez_Zulaica_CV.pdf`} download className="px-4 py-2 text-sm text-gray-300 hover:text-[#D8B89D] transition">
                Spanish
              </a>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body  // se renderiza directo en el body, fuera del nav
  );
}