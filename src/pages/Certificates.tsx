import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiAward } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// --- THEME & STYLE CONSTANTS (matching About.tsx) ---
const PRIMARY_BG_COLOR = 'bg-gradient-to-br from-teal-800 to-teal-900';
const TEXT_COLOR_LIGHT = 'text-white';
const TEXT_COLOR_DIM = 'text-gray-300';
const ACCENT_COLOR_RED = 'text-pink-500';
const ACCENT_COLOR_RED_BG = 'bg-rose-500';
const ACCENT_COLOR_RED_HOVER_BG = 'hover:bg-rose-600';

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

// --- DUMMY CERTIFICATE DATA ---
// Replace with your real image paths or URLs
const certificates = [
  {
    title: 'Internship Journey',
    image: 'https://res.cloudinary.com/dlbgw3fwo/image/upload/v1761633054/acee_gna9tv.jpg',
  },
  {
    title: 'Figma workshop',
    image: 'https://res.cloudinary.com/dlbgw3fwo/image/upload/v1761633123/figma_lcp9g8.jpg',
  },
];

const Certificates: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen ${PRIMARY_BG_COLOR} relative overflow-hidden`}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%233e726f\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"/>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-center mb-10"
        >
          <motion.button
            onClick={() => navigate('/about')}
            className={`flex items-center hover:text-pink-500 gap-2 ${TEXT_COLOR_DIM} hover:${TEXT_COLOR_LIGHT} transition-colors p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
            whileHover={{ x: -8 }}
          >
            <FiArrowLeft className="w-5 h-5" />
            <span className="text-base font-semibold "> About</span>
          </motion.button>

          <motion.button
            onClick={() => navigate('/projects')}
            className={`flex items-center gap-2 hover:text-pink-500 ${TEXT_COLOR_DIM} hover:${TEXT_COLOR_LIGHT} transition-colors p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
            whileHover={{ x: 8 }}
          >
            <span className="text-base font-semibold ">Projects</span>
            <FiArrowRight className="w-5 h-5 " />
          </motion.button>
        </motion.nav>

        {/* Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-3xl sm:text-6xl font-extrabold tracking-tight mb-4 ${TEXT_COLOR_LIGHT}`}
          >
            My <span className={ACCENT_COLOR_RED}>Certificates</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl ${TEXT_COLOR_DIM} max-w-3xl mx-auto leading-relaxed font-medium`}
          >
            Each certificate reflects a milestone in my continuous journey of learning and growth in
            the world of web development and design.
          </motion.p>
        </motion.header>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(255, 255, 255, 0.3)' }}
              className="bg-black bg-opacity-30 border border-teal-700 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm transition-all"
            >
              <div className="relative group overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">{cert.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className={`text-xl ${TEXT_COLOR_DIM} mb-8 font-medium`}>
            Want to see more of my achievements?
          </p>
          <motion.button
            onClick={() => navigate('/resume')}
            className={`inline-flex items-center  gap-3 px-10 py-5  font-semibold text-lg rounded-full shadow-2xl  transition-all focus:outline-none focus:ring-4 focus:ring-rose-400 focus:ring-opacity-50 bg-pink-500`}
            whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(244, 63, 94, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FiAward className="w-5 h-5" />
            <span>View My Resume</span>
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
};

export default Certificates;
