"use client";

import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-semibold text-blue-600 dark:text-blue-300 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
        </div>

        <div className="grid gap-12 items-center md:grid-cols-2">
          {/* Image */}
          <motion.div
            className="flex justify-center order-2 md:order-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

              {/* Profile photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-1 shadow-2xl mx-auto">
                <img
                  src="/profile.jpg"
                  alt="Gibrand Putra Pradana"
                  className="w-full h-full rounded-3xl object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Saya mahasiswa <span className="font-bold text-blue-600 dark:text-blue-400">Teknik Informatika</span> semester 6
                dengan passion mendalam di pengembangan web frontend.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Aktif mengerjakan proyek pribadi dan kolaborasi tim kampus. Saya senang belajar teknologi baru dan saat ini mendalami
                <span className="font-semibold text-blue-600 dark:text-blue-400"> TypeScript dan Next.js</span>.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Target saya adalah magang sebagai <span className="font-semibold text-indigo-600 dark:text-indigo-400">Frontend Developer</span> untuk mengasah skill dan memberikan dampak nyata.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Code Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">12</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Skills</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Mari Berkolaborasi 🚀
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;