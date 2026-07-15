"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 md:py-28 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Background gradient orbs - subtle */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/8 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-500/6 rounded-full filter blur-3xl animate-float-delayed"></div>
      </div>

      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight select-none"
          variants={itemVariants}
        >
          Halo, saya{" "}
          <span className="gradient-text font-black block sm:inline">
            Gibrand Putra
          </span>
        </motion.h1>

        {/* Dynamic Typewriter Role */}
        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-10 h-8 flex justify-center items-center"
          variants={itemVariants}
        >
          <TypewriterText
            words={["Frontend Developer", "UI/UX Enthusiast", "Creative Tech Learner"]}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenWords={1800}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          variants={itemVariants}
        >
          <Link
            href="#projects"
            className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Lihat Karya Saya</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-md flex items-center justify-center cursor-pointer"
          >
            Hubungi Saya
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex justify-center cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="#about" className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors text-xs font-medium tracking-widest uppercase">
            ↓
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;