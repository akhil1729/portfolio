"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const modules = [
  {
    title: "Projects",
    href: "/projects",
    description: "Case studies of ML, LLMs, geospatial AI, and diffusion models.",
  },
  {
    title: "Research & Teaching",
    href: "/about",
    description: "NASA collaborations, capstone work, and graduate assistant roles.",
  },
  {
    title: "Playground",
    href: "/lab",
    description: "Interactive demos and experiments I’m currently building.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Let’s talk about roles, collaborations, or research ideas.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 md:px-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-slate-300">
              Sanjay Research OS
            </span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/lab" className="hover:text-white">
              Lab
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-600 px-4 py-1.5 text-xs font-medium hover:border-emerald-400 hover:text-emerald-300"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Hero + Modules */}
        <div className="flex flex-1 flex-col gap-10 px-6 pb-10 pt-4 md:flex-row md:px-12 md:pb-16 md:pt-10">
          {/* Left: Hero */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-1 flex-col justify-center"
          >
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-emerald-300">
              Data Science · ML · LLMs · Geospatial AI
            </p>
            <h1 className="mb-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              Hi, I’m <span className="text-emerald-300">Sanjay</span>.  
              I build intelligent systems that connect{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                data, models, and the real world.
              </span>
            </h1>
            <p className="mb-6 max-w-xl text-sm text-slate-300 sm:text-base">
              Master’s student in Data Science at UMBC. I work on climate
              forecasting, geospatial ML, LLM trust studies, and generative
              models — turning research ideas into working systems.
            </p>

            <div className="mb-7 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300"
              >
                View Featured Projects
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Open to 2025 internships & roles
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] text-slate-300">
              <span className="rounded-full border border-slate-600 px-3 py-1">
                Geospatial ML & Wildfire Risk
              </span>
              <span className="rounded-full border border-slate-600 px-3 py-1">
                LLM Trust & Hallucination
              </span>
              <span className="rounded-full border border-slate-600 px-3 py-1">
                Diffusion Models for Land Cover
              </span>
            </div>
          </motion.section>

          {/* Right: Modules Grid */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="mt-4 flex flex-1 items-center md:mt-0"
          >
            <div className="grid w-full gap-4 md:grid-cols-2">
              {modules.map((mod, idx) => (
                <motion.div
                  key={mod.title}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 backdrop-blur-md"
                >
                  {/* Accent Glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100">
                    <div className="absolute -inset-16 bg-gradient-to-br from-emerald-500/10 via-indigo-500/10 to-transparent blur-3xl" />
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">
                        Module {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-1 text-base font-semibold text-slate-50">
                        {mod.title}
                      </h2>
                      <p className="mt-1 text-xs text-slate-300">
                        {mod.description}
                      </p>
                    </div>
                    <Link
                      href={mod.href}
                      className="mt-2 inline-flex items-center justify-between rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-200 group-hover:border-emerald-300/80 group-hover:text-emerald-200"
                    >
                      Open Module
                      <span className="ml-1 text-xs">↗</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 px-6 py-4 text-[11px] text-slate-400 md:px-12">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <span>
              © {new Date().getFullYear()} Sanjay Varatharajan · Built with Next.js & love for data.
            </span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Sanjay3207"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sanjayv3207"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your-email@example.com"
                className="hover:text-emerald-300"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
