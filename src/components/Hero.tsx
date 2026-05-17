"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
<section id="home" className="relative w-full min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 md:py-28 overflow-hidden">      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-semibold text-blue-600 dark:text-blue-300">
            ✨ Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          variants={itemVariants}
        >
          Halo, saya{" "}
          <span className="gradient-text font-extrabold">Gibrand Putra Pradana</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Frontend Developer yang passionate dengan teknologi modern. Saya menciptakan pengalaman digital yang indah dan fungsional.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto mb-10"
          variants={itemVariants}
        >
          <div className="glass-effect rounded-lg p-4">
            <div className="text-2xl font-bold gradient-text">4</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
          </div>
          <div className="glass-effect rounded-lg p-4">
            <div className="text-2xl font-bold gradient-text">3</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Skills</div>
          </div>
          <div className="glass-effect rounded-lg p-4">
            <div className="text-2xl font-bold gradient-text">100%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Passion</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            <span>Lihat Karya Saya</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 glass-effect text-gray-900 dark:text-white font-semibold rounded-full hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 transform hover:scale-105"
          >
            Hubungi Saya
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 text-sm">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;