import { useEffect, useRef, useState } from "react";

export default function useActiveSection() {
  const [active, setActive] = useState("home");
  const isScrolling = useRef(false);

  const scrollTo = (id) => {
    isScrolling.current = true;
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && !isScrolling.current) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return { active, scrollTo };
}