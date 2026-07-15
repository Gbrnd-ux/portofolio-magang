"use client";

import { projects } from "@/data/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Proyek <span className="gradient-text font-black">Terbaru</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-5" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Koleksi proyek yang telah saya buat dengan teknologi modern
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => {
            const cardLink = project.liveUrl ?? project.githubUrl ?? "#";

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-gray-200/80 dark:border-gray-800 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/20 hover:-translate-y-1"
              >
                <a
                  href={cardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden relative aspect-video bg-gray-100 dark:bg-gray-900"
                  aria-label={`Open ${project.title}`}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white text-sm font-medium flex items-center gap-1.5">
                      Lihat Project <FiExternalLink size={14} />
                    </span>
                  </div>

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                      <span className="text-5xl text-gray-300 dark:text-gray-700 font-bold">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </a>

                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 dark:border-gray-800/60 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1.5 transition-colors"
                      >
                        <FiExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <FiGithub size={14} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;