// components/Section.jsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  align = "left",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all elements with .section-anim inside this section
            anime({
              targets: el.querySelectorAll(".section-anim"),
              translateY: [30, 0],
              opacity: [0, 1],
              delay: anime.stagger(80),
              duration: 800,
              easing: "easeOutQuad",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <section
      id={id}
      ref={ref}
      className="relative mx-auto mb-20 max-w-6xl px-4 pt-24 md:pt-32"
    >
      <div className={`section-anim flex flex-col gap-2 ${alignClass}`}>
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300/80">
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            {title}
          </h2>
        )}
      </div>
      <div className="section-anim mt-8">{children}</div>
    </section>
  );
}
