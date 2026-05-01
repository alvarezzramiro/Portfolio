import Section from "../components/Section";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import { useRef, useState, useEffect } from "react"

import {
  projectsContainer,
  projectCardVariants,
  fadeUpContainer,
  fadeUpItem,
} from "../utils/animations.js";

function ArrowButton({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      className={`
        lg:hidden
        absolute top-1/2 -translate-y-1/2
        ${isLeft ? "left-[-20px]" : "right-[-20px]"}
        z-10
        w-10 h-10
        rounded-full
        bg-black/40 backdrop-blur-md
        border border-white/10
        text-white
        hover:bg-black/60
        transition
      `}
    >
      {isLeft ? "←" : "→"}
    </button>
  );
}

export default function Projects() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)
  
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll("[data-card]");
      const containerCenter =
        container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, i) => {
        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cards = container.querySelectorAll("[data-card]");
    const target = cards[index];

    if (!target) return;

    const containerWidth = container.offsetWidth;
    const cardLeft = target.offsetLeft;
    const cardWidth = target.offsetWidth;

    const scrollPosition =
      cardLeft - (containerWidth / 2 - cardWidth / 2);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % projects.length;
    scrollToIndex(next);
  };

  const handlePrev = () => {
    const prev =
      (activeIndex - 1 + projects.length) % projects.length;
    scrollToIndex(prev);
  };

  return (
    <Section id="projects" centered>
      <div className="flex flex-col gap-12 w-full">

        {/* HEADER */}
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-3 text-center lg:text-left items-center lg:items-start"
        >
          <motion.h2
            variants={fadeUpItem}
            className="text-4xl md:text-5xl font-semibold"
          >
            My <span className="text-[#D8B89D]">Projects</span>
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="text-[#5C5F4F]"
          >
            A selection of things I've built.
          </motion.p>
        </motion.div>
        
        <div className="relative">

          <ArrowButton direction="left" onClick={handlePrev} />

          {/* CAROUSEL / GRID */}
          <motion.div
            ref={scrollRef}
            variants={projectsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="
              flex lg:grid
              overflow-x-auto lg:overflow-visible
              no-scrollbar
              gap-6
              px-[calc(50%-160px)]
              snap-x snap-mandatory
              lg:px-0
              lg:grid-cols-3
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
                  ${i === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-50"}
                `}
              >
                <ProjectCard {...project} index={i} />
              </div>
            ))}
          </motion.div>

          <ArrowButton direction="right" onClick={handleNext} />
        </div>  
      </div>
    </Section>
  );
}