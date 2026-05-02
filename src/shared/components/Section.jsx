export default function Section({
  id,
  children,
  className = "",
  contentClassName = "",
  centered = false,
}) {
  return (
    <section
      id={id}
      className={`
        relative w-full min-h-screen
        flex justify-center ${centered ? "items-center" : "items-start"}
        snap-start
        ${className}
      `}
    >
      {/* Container */}
      <div
        className={`
          relative z-10
          w-full max-w-[1250px] mx-auto
          px-6
          ${centered ? "h-full flex flex-col justify-center" : "pt-28 pb-16"}
          ${contentClassName}
        `}
      >
        {children}
      </div>
    </section>
  );
}