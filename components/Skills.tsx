"use client";

import { motion } from "framer-motion";

const SkillData = [
  { name: "Python", icon: "bi-code" },
  { name: "PyTorch", icon: "bi-diagram-3" },
  { name: "Next.js", icon: "bi-lightning-charge" },
  { name: "Mulesoft", icon: "bi-hdd-network" },
  { name: "React", icon: "bi-circle-fill" },
  { name: "SQL", icon: "bi-database" },
  { name: "Power BI", icon: "bi-bar-chart" },
  { name: "TypeScript", icon: "bi-filetype-tsx" },
  { name: "Docker", icon: "bi-box-seam" },
  { name: "Java", icon: "bi-cup-hot" },
];


const SkillDataProvider = ({
  src,
  index,
  icon,
}: {
  src: string;
  index: number;
  icon: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex justify-center items-center"
    >
      <div className="group p-4 rounded-xl border border-purple-500/50 bg-[#0f051d] hover:bg-purple-900/20 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(112,66,248,0.4)] cursor-pointer flex flex-col items-center gap-3 w-32">
        
        {/* Bootstrap Icon */}
        <i className={`${icon} text-4xl text-purple-400 group-hover:text-cyan-400 transition-all duration-300`} />

        {/* Skill Name */}
        <span className="text-gray-200 font-semibold text-sm tracking-wide">
          {src}
        </span>
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-6 overflow-hidden py-20 pb-24"
      style={{ transform: "scale(0.95)" }}
    >
      {/* Section title */}
      <div className="mb-10 flex flex-col items-center gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300/80">
          System Scan
        </p>
        <h1 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-[40px] font-semibold text-transparent md:text-[46px]">
          Main Tech Stack
        </h1>
        <p className="text-sm text-gray-400 md:text-base">
          High-performance technologies for data, ML, and full-stack delivery
        </p>
      </div>

      {/* Grid of skills */}
      <div className="mt-4 flex max-w-[900px] flex-row flex-wrap items-center justify-around gap-5">
        {SkillData.map((skill, index) => (
  <SkillDataProvider
    key={index}
    src={skill.name}
    icon={skill.icon}
    index={index}
  />
))}

      </div>

      {/* Background video layer (optional) */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="flex h-full w-full items-center justify-center">
          <video
            className="h-auto w-full max-w-5xl"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm" // optional; won't break if missing, just 404 in console
          />
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.25),_transparent_65%)] mix-blend-screen" />
    </section>
  );
};

export default Skills;
