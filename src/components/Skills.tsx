"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Tailwind CSS", "Git", "GitHub", "Figma", "Prisma", "REST API",
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-semibold text-blue-600 dark:text-blue-300 mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skill & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun aplikasi web berkualitas tinggi
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              className="group"
            >
              <div className="px-6 py-3 glass-effect rounded-full font-semibold text-gray-900 dark:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-400/50 dark:hover:border-blue-600/50 cursor-default select-none">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            Terus berkembang dengan mempelajari teknologi terbaru dan best practices dalam web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;