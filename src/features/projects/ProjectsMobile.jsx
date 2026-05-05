import { motion } from "framer-motion";
import { projects } from "@/shared/data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import { useRef, useState, useEffect } from "react";
import {
  projectsContainer,
  fadeUpContainer,
  fadeUpItem,
} from "@/shared/utils/animations.js";

function ArrowButton({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`
        group
        absolute top-1/2 -translate-y-1/2
        ${isLeft ? "left-[-20px]" : "right-[-20px]"}
        z-10 w-10 h-10 rounded-full
        bg-black/40 backdrop-blur-md
        border border-white/10
        flex items-center justify-center
        transition-all duration-300
        hover:bg-white/10 hover:border-white/30 hover:scale-110
      `}
    >
      <img
        src={`${import.meta.env.BASE_URL}icons/arrows/${direction}.svg`}
        alt={direction}
        className="w-4 h-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />
    </button>
  );
}

export default function ProjectsMobile() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll("[data-card]");
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closest = 0;
      let min = Infinity;

      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(center - cardCenter);

        if (dist < min) {
          min = dist;
          closest = i;
        }
      });

      setActiveIndex(closest);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const cards = container.querySelectorAll("[data-card]");
    const target = cards[index];

    if (!target) return;

    const left =
      target.offsetLeft -
      (container.offsetWidth / 2 - target.offsetWidth / 2);

    container.scrollTo({ left, behavior: "smooth" });
    setActiveIndex(index);
  };

  const next = () =>
    scrollToIndex((activeIndex + 1) % projects.length);

  const prev = () =>
    scrollToIndex((activeIndex - 1 + projects.length) % projects.length);

  return (
    <div className="flex flex-col gap-12 w-full">

      {/* HEADER */}
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        className="flex flex-col gap-3 text-center"
      >
        <motion.h2 variants={fadeUpItem} className="text-4xl font-semibold">
          My <span className="text-[#D8B89D]">Projects</span>
        </motion.h2>

        <motion.p variants={fadeUpItem} className="text-[#A8A39A]">
          A selection of things I've built.
        </motion.p>
      </motion.div>

      <div className="relative">

        <ArrowButton direction="left" onClick={prev} />

        <motion.div
          ref={scrollRef}
          variants={projectsContainer}
          initial="hidden"
          whileInView="show"
          className="
            flex overflow-x-auto no-scrollbar
            gap-6
            px-[calc(50%-160px)]
            snap-x snap-mandatory
          "
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-card
              onClick={() => scrollToIndex(i)}
              className={`
                min-w-[320px] max-w-[400px] flex-shrink-0 snap-center
                transition-all duration-300
                ${i === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-50"}
              `}
            >
              <ProjectCard {...project} index={i} />
            </div>
          ))}
        </motion.div>

        <ArrowButton direction="right" onClick={next} />
      </div>
    </div>
  );
}