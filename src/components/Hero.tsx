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
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern -z-20 opacity-50 dark:opacity-30"></div>
      
      {/* Vercel-style Spotlight Gradients (very subtle, large, static) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-blue-500/15 filter blur-[100px] -z-10 rounded-full opacity-50 pointer-events-none"></div>
      
      {/* Particle Background */}
      <ParticleBackground />

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
          <span className="mr-2">I build things for the web as a</span>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            <TypewriterText
              words={["Frontend Developer.", "UI/UX Enthusiast.", "Creative Coder."]}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={2500}
            />
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          variants={itemVariants}
        >
          <Link
            href="#projects"
            className="group px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Lihat Karya Saya</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3.5 text-gray-700 dark:text-gray-300 font-medium rounded-full border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center cursor-pointer"
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