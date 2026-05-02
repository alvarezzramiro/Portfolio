import NavLinks from "./NavLinks";

export default function MobileMenu({ open, setOpen, links, active, scrollTo }) {
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

        <div className="pt-4 mt-4 border-t border-white/10">
          <a
            href="/cv.pdf"
            download
            className="block text-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}