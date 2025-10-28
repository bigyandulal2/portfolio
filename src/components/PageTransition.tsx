import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ rotateY: -90, opacity: 0, transformOrigin: 'left' }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0, transformOrigin: 'right' }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
