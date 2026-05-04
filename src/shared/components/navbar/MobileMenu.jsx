import { useState } from "react";
import NavLinks from "./NavLinks";

export default function MobileMenu({ open, setOpen, links, active, scrollTo }) {
  const [cvOpen, setCvOpen] = useState(false);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setOpen(false)}
      />

      {/* Menu */}
      <div className="lg:hidden mt-4 mx-4 p-6 rounded-2xl bg-[#292929]/90 border border-white/10 z-50 relative">
        
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

          {/* BUTTON */}
          <button
            onClick={() => setCvOpen(!cvOpen)}
            className="w-full text-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition text-gray-300"
          >
            Download CV
          </button>

          {/* DROPDOWN */}
          <div
            className={`
              overflow-hidden transition-all duration-300
              ${cvOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}
            `}
          >
            <div className="flex flex-col gap-2 items-center">

              <span className="text-[10px] uppercase tracking-widest text-[#A8A39A]/70">
                Select language
              </span>

              <a
                href={`${import.meta.env.BASE_URL}CV/CV English.pdf`}
                download
                className="px-4 py-2 text-sm text-gray-300 hover:text-[#D8B89D] transition"
              >
                English
              </a>

              <a
                href={`${import.meta.env.BASE_URL}CV/CV Spanish.pdf`}
                download
                className="px-4 py-2 text-sm text-gray-300 hover:text-[#D8B89D] transition"
              >
                Español
              </a>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}