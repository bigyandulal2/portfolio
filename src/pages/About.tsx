import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowLeft,
  FiArrowRight,
  FiZap,
  FiTarget,
  FiStar,
  FiChevronRight,
  FiAward
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// --- CONFIGURATION ---
const PRIMARY_BG_COLOR = 'bg-gradient-to-br from-teal-800 to-teal-900';
const TEXT_COLOR_LIGHT = 'text-white';
const TEXT_COLOR_DIM = 'text-gray-300';
const ACCENT_COLOR_RED = 'text-pink-500';
const ACCENT_COLOR_RED_BG = 'bg-rose-500';
const ACCENT_COLOR_RED_HOVER_BG = 'hover:bg-rose-600';

const stats = [
  { number: '3+', label: 'Years Building Web Experiences' },
  { number: '20+', label: 'Completed Projects (Frontend & FullStack)' },
  { number: '90%', label: 'Client Feedback Received & Acted On' },
];

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Framer Motion',
  'REST APIs',
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: 'beforeChildren' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12, mass: 0.5 },
  },
};

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${PRIMARY_BG_COLOR} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%233e726f\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"/>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-center mb-1"
        >
          <motion.button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 ${TEXT_COLOR_DIM} hover:${TEXT_COLOR_LIGHT} transition-colors p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
            whileHover={{ x: -8 }}
          >
            <FiArrowLeft className="w-5 h-5" />
            <span className="text-base font-semibold">Home</span>
          </motion.button>

          <motion.button
            onClick={() => navigate('/projects')}
            className={`flex items-center gap-2 ${TEXT_COLOR_DIM} hover:${TEXT_COLOR_LIGHT} transition-colors p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
            whileHover={{ x: 8 }}
          >
            <span className="text-base font-semibold">Projects</span>
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.nav>

        {/* Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-3xl sm:text-6xl font-extrabold tracking-tight mb-4 ${TEXT_COLOR_LIGHT}`}
          >
            Get to Know <span className={ACCENT_COLOR_RED}>Me</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-lg ${TEXT_COLOR_DIM} max-w-2xl mx-auto leading-relaxed font-medium`}
          >
            More than just a FullStack Developer, I'm a creative problem-solver
            with a passion for building seamless and impactful digital
            experiences.
          </motion.p>
        </motion.header>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 p-8 bg-black bg-opacity-20 rounded-2xl shadow-2xl border border-teal-700"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center">
              <div className={`text-2xl md:text-6xl font-extrabold mb-2 ${ACCENT_COLOR_RED}`}>
                {stat.number}
              </div>
              <div
                className={`text-base sm:text-lg ${TEXT_COLOR_DIM} font-medium uppercase tracking-wider`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-1"
        >
          {/* My Philosophy */}
          <div className="space-y-8">
            <motion.h2
              variants={itemVariants}
              className={`text-3xl font-bold mb-4 ${TEXT_COLOR_LIGHT} flex flex-col md:flex-row items-center gap-4`}
            >
              <FiTarget className={`${ACCENT_COLOR_RED} text-center`} /> My Drive & Philosophy
            </motion.h2>
            <motion.p variants={itemVariants} className={`text-lg ${TEXT_COLOR_DIM} leading-relaxed`}>
              I thrive on bringing ideas to life, transforming complex challenges into elegant
              solutions. For me, development isn't just about lines of code; it's about crafting
              intuitive interfaces and robust backends that truly make a difference.
            </motion.p>
            <motion.p variants={itemVariants} className={`text-lg ${TEXT_COLOR_DIM} leading-relaxed`}>
              Every project is an opportunity to learn, innovate, and create something exceptional. I
              focus on clean architecture, optimal performance, and user-centric design, ensuring
              every digital product I touch is a step above.
            </motion.p>
          </div>

          {/* Skills */}
          <div>
            <motion.h2
              variants={itemVariants}
              className={`text-3xl font-bold mb-6 ${TEXT_COLOR_LIGHT} flex items-center gap-4`}
            >
              <FiZap className={`w-7 h-7 ${ACCENT_COLOR_RED}`} /> My Core Toolkit
            </motion.h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: `0 8px 16px rgba(244, 63, 94, 0.4)`,
                  }}
                  className={`px-5 py-2.5 bg-black bg-opacity-30 border border-teal-600 ${TEXT_COLOR_LIGHT} rounded-full text-base font-medium cursor-pointer transition-all shadow-lg`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`text-xl ${TEXT_COLOR_DIM} mb-8 font-medium`}>
            Ready to build something impactful?
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
            {/* Explore My Work */}
            <motion.button
              onClick={() => navigate('/projects')}
              className={`inline-flex items-center gap-3 px-10 py-5 ${ACCENT_COLOR_RED_BG} ${TEXT_COLOR_LIGHT} font-semibold text-lg rounded-full shadow-2xl ${ACCENT_COLOR_RED_HOVER_BG} transition-all focus:outline-none focus:ring-4 focus:ring-rose-400 focus:ring-opacity-50`}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(244, 63, 94, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FiStar className="w-5 h-5" />
              <span>Explore My Work</span>
              <FiChevronRight className="w-5 h-5" />
            </motion.button>

            {/* My Resume */}
            <motion.button
              onClick={() => navigate('/resume')}
              className={`inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-800 font-semibold text-lg rounded-full shadow-2xl hover:bg-gray-100 transition-all focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50`}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>My Resume</span>
              <FiArrowRight className="w-5 h-5" />
            </motion.button>

            {/* NEW: Certificates Button */}
            <motion.button
              onClick={() => navigate('/certificates')}
              className={`inline-flex items-center gap-3 px-10 py-5 bg-teal-700 text-white font-semibold text-lg rounded-full shadow-2xl hover:bg-teal-800 transition-all focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50`}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(13, 148, 136, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <FiAward className="w-5 h-5" />
              <span>My Certificates</span>
              <FiChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
