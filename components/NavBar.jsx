// components/NavBar.jsx
"use client";

import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";

const sections = [
  { id: "hero", label: "Launch Pad" },
  { id: "about", label: "Mission Briefing" },
  { id: "skills", label: "System Scan" },      // 🔥 new
  { id: "experience", label: "Flight Log" },
  { id: "projects", label: "Research Lab" },
  { id: "contact", label: "Comm Channel" },
];


export default function NavBar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    // Anime.js staggered drop-in for nav pills
    anime({
      targets: ".nav-orbit-item",
      translateY: [-20, 0],
      opacity: [0, 1],
      delay: anime.stagger(80),
      duration: 700,
      easing: "easeOutQuad",
    });

    const handleScroll = () => {
      const offsets = sections.map((section) => {
        const el = document.getElementById(section.id);
        if (!el) return { id: section.id, top: Infinity };
        return {
          id: section.id,
          top: Math.abs(el.getBoundingClientRect().top),
        };
      });

      const closest = offsets.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );
      setActive(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: window.scrollY + el.getBoundingClientRect().top - 80,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-4 left-1/2 z-40 -translate-x-1/2">
      <nav className="glass-panel flex items-center gap-4 px-6 py-3 shadow-lg">
        <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
          Akhil ▪ Space Log
        </div>
        <div className="hidden gap-2 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`nav-orbit-item rounded-full px-3 py-1 text-xs font-medium transition 
                ${
                  active === s.id
                    ? "bg-indigo-500/80 text-white shadow-md shadow-indigo-500/40"
                    : "bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
