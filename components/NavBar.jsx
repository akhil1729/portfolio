// components/NavBar.jsx
"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Launch Pad" },
  { id: "about", label: "Mission Briefing" },
  { id: "experience", label: "Flight Log" },
  { id: "projects", label: "Research Lab" },
  { id: "contact", label: "Comm Channel" },
];

export default function NavBar() {
  const [active, setActive] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entry animation after mount
    const timer = setTimeout(() => setMounted(true), 50);

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
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
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
      <nav
        className={`glass-panel flex items-center gap-4 px-6 py-3 shadow-lg transition-all duration-700 ${
          mounted
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
          Akhil ▪ Space Log
        </div>
        <div className="hidden gap-2 md:flex">
          {sections.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300
                ${
                  active === s.id
                    ? "bg-indigo-500/80 text-white shadow-md shadow-indigo-500/40"
                    : "bg-slate-900/60 text-slate-300 hover:bg-slate-800/80"
                }
                ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }
              `}
              style={{
                transitionDelay: mounted ? `${idx * 80}ms` : "0ms",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
