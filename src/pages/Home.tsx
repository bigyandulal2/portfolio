import { motion } from 'framer-motion';
import { FiArrowRight, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { FiGithub } from "react-icons/fi";
import Copyright from '@/components/ui/copyright';
const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-teal-900  relative overflow-hidden">
        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1  rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-4"
            >
              <div className="inline-block">
                <motion.div
                  className="text-lg font-medium text-pink-500 mb-2  uppercase"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Welcome to my world
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-none"
            >
              <span className="block">Hi, I'm</span>
              <span className="text-pink-500 block mt-2">Bigyan Dulal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-200 mb-12 font-light"
            >
              FullStack Developer 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <Link to="/about">
                <motion.button
                  className="group px-8 py-4 bg-pink-500 text-primary-foreground rounded-full font-semibold text-lg inline-flex items-center gap-3 overflow-hidden relative"
                  whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(244, 63, 94, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Explore My Story</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-white text-pink-500    rounded-full font-semibold text-lg   transition-all"
                  whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(255, 255, 255, 0.3)' }}
                  
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center justify-center gap-6"
            >
              {[
                { Icon: FiGithub, href: 'https://github.com/bigyandulal2', label: 'github',css:"text-gray-300" },
                { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/bigyan-dulal-84548b302/', label: 'LinkedIn',css:" text-gray-300" },
                { Icon: FiMail, href: 'mailto:rdravid569@gmail.com', label: 'Email',css:" text-gray-300" },
              ].map(({ Icon, href, label,css }) => {
                  
                return <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` flex items-center justify-center ${css} b text-xl hover:border-primary hover:text-pink-500  transition-all`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={30} />
                </motion.a>
})}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
      </div>
      <Copyright/>
    </PageTransition>
  );
};

export default Home;
