import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import PageTransition from '@/components/PageTransition';
// Assuming these asset imports are correct


// --- CONFIGURATION ---
const PRIMARY_BG_COLOR = 'bg-gradient-to-br from-teal-800 to-teal-900';
const CARD_BG_COLOR = 'bg-black bg-opacity-30'; // Darker, translucent card background
const TEXT_COLOR_LIGHT = 'text-white';
const TEXT_COLOR_DIM = 'text-gray-300';
const ACCENT_COLOR_RED = 'text-rose-500';
const ACCENT_COLOR_RED_BG = 'bg-rose-500';
const ACCENT_COLOR_RED_HOVER_BG = 'hover:bg-rose-600';
const BORDER_COLOR = 'border-teal-700'; // Subtle border color

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // NOTE: Added github link to BhokExpress for consistency, assumed '#' if not available
  const projects = [
    {
      id: 1,
      title: 'Bhok express',
      description: 'A full-stack e-commerce solution with real-time inventory, payment processing, map features, and admin dashboard.',
      fullDescription: 'Built with Next.js and MongoDB, this platform handles thousands of products with a seamless checkout experience, real-time inventory tracking, and comprehensive analytics. Integrates Khalti Payment for local transactions.',
      tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Khalti Payment'],
      image: "https://res.cloudinary.com/dlbgw3fwo/image/upload/v1761633300/bhooo_xf0oed.png",
      link: "https://bhokexpress.com/",
    },
    {
      id: 2,
      title: 'Global Medilab',
      description: 'A full stack web for selling medicines online',
      fullDescription: 'Built with React.js and Django along with Postgre sql, i assisted in building User interface using react and tailwind css',
      tags: ['React.js', 'Tailwind CSS', 'PostgreSql', 'Django'],
      image: "https://res.cloudinary.com/dlbgw3fwo/image/upload/v1761633763/gmls_xbrd9s.png",
      link: "https://gmls.com.np/",
    
    },
    {
      id: 3,
      title: 'Rotary Damak',
      description: 'A non profit organization that provides contribution and unite people for humanity',
      fullDescription: 'Built with React.js and Django, I contributed in building Some sections of the ui with other peers',
      tags: ['React.js', 'Bootstrap', 'postgreSql', 'Django'],
      image: "https://res.cloudinary.com/dlbgw3fwo/image/upload/v1761633775/rotary_infnee.png",
      link: "https://rotarydamak.org.np/",
    },
  ];

  const gridItemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
      }
    }
  };

  return (
    <PageTransition>
      <div className={`min-h-screen ${PRIMARY_BG_COLOR} relative overflow-hidden`}>
        {/* Subtle Background Pattern (Same as About page) */}
       

        <div className="container mx-auto px-6 py-2 relative z-10">
          
          {/* Navigation - Dark Theme, Red Accent Hover */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-5"
          >
            <Link to="/about">
              <motion.button
                className={`flex items-center gap-2 hover:text-pink-500 transition-colors p-2 rounded-md`}
                whileHover={{ x: -8 }}
              >
                <FiArrowLeft className='w-5 h-5' /> <span className='font-medium'>About Me</span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className={`flex items-center gap-2 hover:text-pink-500 transition-colors p-2 rounded-md`}
                whileHover={{ x: 8 }}
              >
                <span className='font-medium'>Contact</span> <FiArrowRight className='w-5 h-5' />
              </motion.button>
            </Link>
          </motion.div>

          {/* Page header - Bold Red Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${TEXT_COLOR_LIGHT}`}>
              My <span className='text-pink-500'>Works</span>
            </h1>
            <p className={`text-xl ${TEXT_COLOR_DIM} max-w-3xl mx-auto font-medium`}>
              A showcase of my recent work, highlighting projects that push the limits of modern full-stack development.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={gridItemVariants}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer h-full"
              >
                <div className={`relative ${CARD_BG_COLOR} border  rounded-2xl overflow-hidden h-full flex flex-col hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-900/40`}>
                  
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }} // Reduced scale slightly for smoothness
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Hover overlay for 'View Details' */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/80 flex items-center justify-center"
                    >
                      <div className={` text-xl font-bold border-2 border-pink-500 p-3 rounded-lg text-pink-500`}>
                        View Details
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className={`text-2xl font-bold mb-3`}>
                      {project.title}
                    </h3>
                    <p className={`text-base ${TEXT_COLOR_DIM} mb-4 leading-relaxed flex-grow`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-teal-700/50">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 bg-teal-900/50 border border-teal-600 rounded-full text-sm font-medium ${TEXT_COLOR_DIM}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project detail modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
              >
                <motion.div
                  initial={{ scale: 0.8, rotateX: -90 }} // More dramatic reveal
                  animate={{ scale: 1, rotateX: 0 }}
                  exit={{ scale: 0.8, rotateX: 90 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 150, damping: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`${CARD_BG_COLOR} border border-rose-500/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-rose-900/50 ${TEXT_COLOR_LIGHT}`}
                >
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-80 object-cover rounded-t-3xl border-b border-rose-500/50"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-pink-500 transition-all text-white"
                      aria-label="Close project details"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <h2 className={`text-4xl font-bold mb-4 text-pink-500`}>
                      {selectedProject.title}
                    </h2>
                    <p className={`text-lg ${TEXT_COLOR_DIM} mb-6 leading-relaxed`}>
                      {selectedProject.fullDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-4 py-2 bg-teal-700 border border-teal-500 rounded-full font-medium text-sm ${TEXT_COLOR_LIGHT}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* View Live Button (Red Accent) */}
                      <motion.a
                        href={selectedProject.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`flex-1 px-6 py-4  rounded-full font-semibold inline-flex items-center justify-center gap-3 transition-colors  shadow-lg shadow-rose-900/50 bg-pink-500`}
                      >
                        View Live <FiExternalLink />
                      </motion.a>
                      
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;