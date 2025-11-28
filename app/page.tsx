"use client";

import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import ParallaxCard from "@/components/ParallaxCard";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import SpaceBackground from "@/components/SpaceBackground"; // <--- Import New 3D Scene

export default function Home() {
  return (
    <main className="relative min-h-screen pb-20">
      
      {/* 1. Add the 3D Background here. It is 'fixed' so it stays visible while scrolling */}
      <SpaceBackground /> 

      <NavBar />

      {/* Hero / Launch Pad */}
      <HeroSection />

      {/* About / Mission Briefing */}
      <AboutSection />

      {/* Skills / System Scan */}
      <Skills />

      {/* Experience / Flight Log */}
      <ExperienceSection />

      {/* Projects / Research Lab */}
      <ProjectsSection />

      {/* Contact / Comm Channel */}
      <ContactSection />
    </main>
  );
}

// ... Keep your existing HeroSection, AboutSection, etc. code below ...
// Important: In HeroSection, REMOVE <ParallaxOrbs /> since SpaceBackground covers it.


// ---------------- HERO SECTION ----------------

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pt-24 md:flex-row md:items-center"
    >

      {/* Left: Kinetic heading + CTAs */}
      <div className="section-anim relative z-10 flex-1 space-y-6">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300"
        >
          Mission: Data, Space &amp; Intelligent Systems
        </motion.p>

        {/* Split title for kinetic feel */}
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl"
          >
            Akhil{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
              Kanukula
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-sm uppercase tracking-[0.25em] text-slate-400"
          >
            Data Science ▪ ML Systems ▪ Space &amp; Climate
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="max-w-xl text-sm text-slate-300 md:text-base"
        >
          Data Analyst, Graduate Research Assistant, and Full-Stack Web
          Developer crafting{" "}
          <span className="text-indigo-300">
            ML systems for climate, space, and human behavior
          </span>
          . From NASA-affiliated climate prediction research to LLM-driven user
          study platforms, my work orbits around turning complex data into
          cinematic, interactive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-400 hover:shadow-indigo-400/60"
          >
            View Mission Log
          </a>
          <a
            href="#skills"
            className="rounded-full border border-slate-500/60 px-5 py-2 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
          >
            System Scan
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400"
        >
          <span className="rounded-full border border-slate-600/60 px-3 py-1">
            NASA Climate Forecasting
          </span>
          <span className="rounded-full border border-slate-600/60 px-3 py-1">
            Diffusion Models
          </span>
          <span className="rounded-full border border-slate-600/60 px-3 py-1">
            LLM Behavioral Web Apps
          </span>
        </motion.div>
      </div>

      {/* Right: holographic “current orbit” card */}
      <div className="relative z-10 mt-12 flex-1 md:mt-0 md:pl-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* reuse ParallaxCard styling via glass-panel to keep things consistent */}
          <div className="glass-panel relative h-64 overflow-hidden p-6 shadow-xl md:h-80">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_transparent_65%)] opacity-70" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
                  Current Orbit
                </p>
                <p className="mt-2 text-sm font-medium text-slate-100">
                  M.S. Data Science @ UMBC (CGPA 4.0/4.0)
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Graduate Research Assistant on NASA-funded climate projects,
                  designing DDPM-based U-Net models for 2m temperature
                  anomalies and ensemble uncertainty.
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-slate-400">Primary Stack</p>
                  <p className="text-sm text-slate-200">
                    PyTorch · Next.js · FastAPI · PostgreSQL
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Coordinates
                  </p>
                  <p className="text-xs text-slate-200">
                    Baltimore, MD · Earth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// ---------------- ABOUT SECTION ----------------

function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="Mission Briefing"
      title="Who I Am"
      align="left"
    >
      <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
        <div className="space-y-4 text-sm text-slate-300 md:text-base">
          <p>
            I’m a Data Scientist in training and a builder at heart. My work
            spans{" "}
            <span className="text-indigo-300">
              climate forecasting, land-cover simulation, LLM-driven user
              studies, and production-grade web systems
            </span>
            .
          </p>
          <p>
            Previously, I developed REST APIs and microservices as a MuleSoft
            Developer at Tata Consultancy Services, and now I work across the
            full stack—Next.js, FastAPI, PostgreSQL—to design research platforms
            that can scale from pilot studies to real-world deployments.
          </p>
          <p>
            I enjoy taking complex, high-dimensional problems and turning them
            into clean visual interfaces and robust ML pipelines—whether that’s
            simulating future land-cover using diffusion models or studying how
            humans interact with hallucinating language models.
          </p>
        </div>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="glass-panel p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-300">
              Core Systems
            </p>
            <p className="mt-2">
              Climate ML · Diffusion Models · U-Net · LLMs · Full-Stack Web
            </p>
          </div>
          <div className="glass-panel p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-300">
              Languages &amp; Tools
            </p>
            <p className="mt-2">
              Python, C++, Java, PyTorch, Next.js, FastAPI, PostgreSQL, Power BI,
              MuleSoft, HPC.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ---------------- EXPERIENCE SECTION ----------------

type Role = {
  company: string;
  title: string;
  timeline: string;
  description: string;
  tags: string[];
};

function ExperienceSection() {
  const roles: Role[] = [
    {
      company: "Health Tech Alley",
      title: "Data Analyst",
      timeline: "Sept 2025 – Present",
      description:
        "Building childcare demand/supply datasets, relational schemas, and Power BI dashboards to reveal shortages at the census block level.",
      tags: ["Data Engineering", "SQL", "Power BI", "Spatial Analysis"],
    },
    {
      company: "UMBC · NASA",
      title: "Graduate Research Assistant",
      timeline: "Aug 2024 – Aug 2025",
      description:
        "Developed DDPM-conditioned U-Net for monthly 2-m temperature anomaly forecasting using ERA5 GRIB/NetCDF pipelines with xarray+cfgrib.",
      tags: ["Diffusion Models", "U-Net", "PyTorch", "Climate ML"],
    },
    {
      company: "Cyber Pack Ventures Inc.",
      title: "Software Developer Intern",
      timeline: "Jan 2025 – Present",
      description:
        "Built an LLM behavioral study platform with three fixed AI personalities, hallucination logic, and full-stack logging on Next.js + FastAPI + PostgreSQL.",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "LLM Systems"],
    },
    {
      company: "Tata Consultancy Services",
      title: "MuleSoft Developer",
      timeline: "Sept 2021 – May 2024",
      description:
        "Designed RAML-based REST APIs, integrated Angular front ends with SAP Commerce Cloud, and deployed services on CloudHub with CI/CD.",
      tags: ["MuleSoft", "APIs", "Microservices", "CI/CD"],
    },
  ];

  return (
    <Section
      id="experience"
      eyebrow="Flight Log"
      title="Experience Across Orbits"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((role) => (
          <ParallaxCard key={role.company} className="section-anim">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
                  {role.company}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  {role.title}
                </p>
              </div>
              <p className="text-[11px] text-slate-400">{role.timeline}</p>
            </div>
            <p className="mt-3 text-xs text-slate-300 md:text-sm">
              {role.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-600/80 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ParallaxCard>
        ))}
      </div>
    </Section>
  );
}

// ---------------- PROJECTS SECTION ----------------

type Project = {
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
};

function ProjectsSection() {
  const projects: Project[] = [
    {
      name: "Land Cover Simulation via Diffusion Models",
      subtitle:
        "Simulating Land Cover Changes Using Diffusion-Based Generative Models",
      description:
        "Trained a UNet-based diffusion model on EuroSAT Sentinel-II imagery to simulate land cover transitions, aiding urban planning and environmental monitoring.",
      tech: ["Python", "PyTorch", "UNet", "EuroSAT", "Diffusion"],
      link: "https://github.com/akhil1729/Simulating-Land-Cover-Changes-Using-Diffusion-Based-Generative-Models",
    },
    {
      name: "Full-Stack LLM Behavioral Web Application",
      subtitle: "NSF-Funded User Study Platform",
      description:
        "Developed a Next.js + FastAPI + PostgreSQL platform analyzing how users interact with hallucinating LLMs under three fixed AI personalities and task-wise flows.",
      tech: ["Next.js", "FastAPI", "PostgreSQL", "Gemini LLM", "Vercel"],
      link: "https://github.com/akhil1729/llm",
    },
    {
      name: "DDPM-Based Climate Forecasting",
      subtitle: "2m Temperature Anomaly Modeling",
      description:
        "Built DDPM-conditioned U-Net models on ERA5 reanalysis data with xarray+cfgrib pipelines, achieving improved skill over deterministic baselines.",
      tech: ["PyTorch", "xarray", "cfgrib", "HPC", "GRIB/NetCDF"],
    },
  ];

  return (
    <Section
      id="projects"
      eyebrow="Research Lab"
      title="Highlighted Missions"
      align="left"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ParallaxCard
            key={project.name}
            className="section-anim flex flex-col"
          >
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
                {project.subtitle}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                {project.name}
              </p>
              <p className="mt-2 text-xs text-slate-300 md:text-sm">
                {project.description}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-900/70 px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-xs font-medium text-indigo-300 hover:text-indigo-200"
              >
                View on GitHub
                <span className="ml-1 text-[11px]">↗</span>
              </a>
            )}
          </ParallaxCard>
        ))}
      </div>
    </Section>
  );
}

// ---------------- CONTACT SECTION ----------------

function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Comm Channel"
      title="Let’s Build Something"
      align="center"
    >
      <div className="mx-auto max-w-xl space-y-6 text-center">
        <p className="text-sm text-slate-300 md:text-base">
          Open to internships, research collaborations, and full-stack ML/AI
          projects—especially those at the intersection of{" "}
          <span className="text-indigo-300">
            climate, satellite imagery, and intelligent systems
          </span>
          .
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <a
            href="mailto:akhilk1@umbc.edu"
            className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/akhil1729"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-500/60 px-4 py-2 text-sm text-slate-200 hover:border-indigo-400 hover:text-indigo-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/akhil1729"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-500/60 px-4 py-2 text-sm text-slate-200 hover:border-indigo-400 hover:text-indigo-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
