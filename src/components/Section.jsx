export default function Section({ id, children}) {
  return (
    <section
      id={id}
      className="relative h-screen w-full flex items-center snap-start overflow-hidden"
    >

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl w-full px-6 pt-20 mx-auto">
        {children}
      </div>
    </section>
  );
}