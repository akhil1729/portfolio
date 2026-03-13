// components/NavBar.jsx
"use client";

import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";

const sections = [
  { id: "hero", label: "Launch Pad" },
  { id: "about", label: "About" },
  { id: "skills", label: "Tech Stack" },
  { id: "experience", label: "Projects" },
  { id: "projects", label: "Research Lab" },
  { id: "contact", label: "Connect With Me" },
];

export default function NavBar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
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
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-1/2 z-40 -translate-x-1/2 w-[calc(100%-2rem)] max-w-fit">
      <nav className="glass-panel flex items-center gap-4 px-4 py-3 shadow-lg md:px-6">
        <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
          Akhil Kanukula
        </div>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex flex-col gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-5 bg-slate-300 transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-slate-300 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-slate-300 transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="glass-panel mt-2 flex flex-col gap-1 p-3 shadow-lg md:hidden">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition
                ${
                  active === s.id
                    ? "bg-indigo-500/80 text-white shadow-md shadow-indigo-500/40"
                    : "text-slate-300 hover:bg-slate-800/60"
                }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
