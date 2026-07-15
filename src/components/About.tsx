"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const interests = ["Web Dev", "UI/UX", "Problem Solving", "React Ecosystem", "TypeScript", "Open Source"];

  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Tentang <span className="gradient-text font-black">Saya</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid gap-12 lg:gap-16 items-start lg:grid-cols-5">
          {/* Image - takes 2 columns, much bigger */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm">
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Gibrand Putra Pradana"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 350px"
                  priority
                />
                {/* Subtle overlay at bottom for text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating accent - subtle, not overdone */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-blue-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-indigo-500/8 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Content - takes 3 columns */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-6 relative">
              {/* Decorative accent line */}
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full hidden sm:block"></div>
              
              <div className="sm:pl-6 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Saya mahasiswa <span className="font-semibold text-gray-900 dark:text-white">Teknik Informatika</span> semester 6
                  dengan passion mendalam di pengembangan web frontend.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Aktif mengerjakan proyek pribadi dan kolaborasi tim kampus. Saya senang belajar teknologi baru dan saat ini mendalami
                  <span className="font-semibold text-gray-900 dark:text-white"> TypeScript dan Next.js</span>.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Target saya adalah magang sebagai <span className="font-semibold text-gray-900 dark:text-white">Frontend Developer</span> untuk mengasah skill dan memberikan dampak nyata.
                </p>
              </div>
            </motion.div>

            {/* Interest tags - simpler style */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {interests.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-white/5 rounded-lg text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-white/8"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Stats - cleaner layout */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/60 dark:border-gray-800/60">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                  <AnimatedCounter target={4} />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Code Hours</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                  <AnimatedCounter target={12} />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Skills</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                Mari Berkolaborasi
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;