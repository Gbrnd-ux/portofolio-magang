"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiPrisma
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    title: "Tools & Backend",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Prisma", icon: <SiPrisma className="text-[#2D3748] dark:text-gray-300" /> },
      { name: "REST API", icon: <TbApi className="text-[#0EA5E9]" /> },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Skill & <span className="gradient-text font-black">Tools</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-5" />
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            Teknologi yang saya gunakan sehari-hari untuk membangun aplikasi web
          </p>
        </div>

        {/* Skills Layout */}
        <div className="space-y-12">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
                {cat.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-3 px-4 py-3.5 bg-white dark:bg-[#111827] rounded-xl border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default select-none group">
                      <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Selalu bersemangat mempelajari teknologi baru dan mengeksplorasi ekosistem web modern.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;