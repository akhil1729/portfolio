// components/Section.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  align = "left",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
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

  const baseAnim =
    "transition-all duration-700 ease-out transform will-change-transform";

  const stateClass = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-6";

  return (
    <section
      id={id}
      ref={ref}
      className="relative mx-auto mb-20 max-w-6xl px-4 pt-24 md:pt-32"
    >
      <div className={`${baseAnim} ${stateClass} flex flex-col gap-2 ${alignClass}`}>
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

      <div className={`${baseAnim} ${stateClass} mt-8`}>
        {children}
      </div>
    </section>
  );
}
