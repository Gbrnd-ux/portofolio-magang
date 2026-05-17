import { projects } from "@/data/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const icons = ["🎬", "💰", "🛍️", "📱"];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-semibold text-blue-600 dark:text-blue-300 mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Proyek <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Koleksi proyek-proyek yang telah saya buat dengan teknologi modern dan best practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => {
            const cardLink = project.liveUrl ?? project.githubUrl;

            return (
              <div
                key={project.id}
                className="group glass-effect rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 hover:border-blue-400/50 dark:hover:border-blue-600/50 card-hover transition-all duration-300"
              >
                <a
                  href={cardLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden"
                  aria-label={`Open ${project.title}`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-44 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 dark:from-blue-500/5 dark:to-indigo-600/5 rounded-b-none flex items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-105">
                      {icons[idx] || "📁"}
                    </div>
                  )}
                </a>

                <div className="p-5 sm:p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-block text-xs bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium border border-blue-500/30 dark:border-blue-400/30 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20 dark:border-gray-700/20">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors group/link"
                      >
                        <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors group/link"
                    >
                      <FiGithub className="group-hover/link:translate-x-1 transition-transform" />
                      Repository
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex w-full justify-center sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Punya proyek menarik? Mari kolaborasi! 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;