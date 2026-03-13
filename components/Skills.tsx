"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Skill data organised by category                                   */
/* ------------------------------------------------------------------ */

type Skill = { name: string; icon?: string };

type SkillCategory = {
  label: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    label: "Languages & Frameworks",
    skills: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "R", icon: "devicon-r-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Angular", icon: "devicon-angularjs-plain" },
      { name: "React.js", icon: "devicon-react-original" },
    ],
  },
  {
    label: "Front-End Technologies",
    skills: [
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "jQuery", icon: "devicon-jquery-plain" },
      { name: "GraphQL", icon: "devicon-graphql-plain" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "PL/SQL", icon: "devicon-oracle-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "SQLite", icon: "devicon-sqlite-plain" },
      { name: "CockroachDB" },
      { name: "Redis", icon: "devicon-redis-plain" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "GCP", icon: "devicon-googlecloud-plain" },
      { name: "Azure", icon: "devicon-azure-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "Postman", icon: "devicon-postman-plain" },
      { name: "Splunk" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "MuleSoft" },
      { name: "Informatica" },
      { name: "Splunk" },
      { name: "Google Workspace", icon: "devicon-google-plain" },
      { name: "Microsoft Suite", icon: "devicon-windows11-original" },
      { name: "Power Platform" },
    ],
  },
  {
    label: "AI / ML & Scientific Computing",
    skills: [
      { name: "PyTorch", icon: "devicon-pytorch-plain" },
      { name: "CUDA" },
      { name: "HPC" },
      { name: "Matplotlib", icon: "devicon-matplotlib-plain" },
      { name: "Basemap" },
      { name: "Jupyter", icon: "devicon-jupyter-plain" },
      { name: "NumPy", icon: "devicon-numpy-plain" },
      { name: "Pandas", icon: "devicon-pandas-plain" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Single skill chip                                                  */
/* ------------------------------------------------------------------ */

function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div className="group flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-purple-500/40 bg-[#0f051d]/80 px-2.5 py-2 shadow-[0_0_14px_rgba(112,66,248,0.3)] transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:bg-purple-900/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] cursor-default md:gap-2.5 md:rounded-xl md:px-4 md:py-3">
      {skill.icon ? (
        <i
          className={`${skill.icon} text-lg text-purple-400 transition-colors duration-300 group-hover:text-cyan-400 md:text-2xl`}
        />
      ) : (
        /* Text-initial fallback for skills without a Devicon icon */
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-500/20 text-[10px] font-bold text-purple-300 transition-colors duration-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 md:h-7 md:w-7 md:text-xs">
          {skill.name.slice(0, 2)}
        </span>
      )}
      <span className="whitespace-nowrap text-xs font-medium text-gray-200 md:text-sm">
        {skill.name}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Infinite marquee row                                               */
/* ------------------------------------------------------------------ */

function MarqueeRow({
  skills,
  direction = "left",
  speed = 30,
}: {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate items enough times to fill the viewport seamlessly
  const items = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]">
      <div
        className={`flex gap-4 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
          }`}
        style={
          {
            "--marquee-speed": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {items.map((skill, i) => (
          <SkillChip key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Skills section                                                */
/* ------------------------------------------------------------------ */

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center gap-6 overflow-hidden py-20 pb-24"
    >
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6 flex flex-col items-center gap-2 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300/80">
          System Scan
        </p>
        <h1 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-[28px] font-semibold text-transparent md:text-[46px]">
          Main Tech Stack
        </h1>
        <p className="text-sm text-gray-400 md:text-base">
          High-performance technologies for data, ML, and full-stack delivery
        </p>
      </motion.div>

      {/* Category rows */}
      <div className="w-full space-y-5 md:space-y-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            {/* Category label */}
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-300/70">
              {cat.label}
            </p>

            {/* Marquee — alternate direction per row */}
            <MarqueeRow
              skills={cat.skills}
              direction={idx % 2 === 0 ? "left" : "right"}
              speed={35 + cat.skills.length * 2}
            />
          </motion.div>
        ))}
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.25),_transparent_65%)] mix-blend-screen" />
    </section>
  );
};

export default Skills;
