import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Close } from '@mui/icons-material';

export default function Header({ scrolled, openResume }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.header
      animate={{
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        backgroundColor: scrolled ? 'rgba(255 255 255 / 0.4)' : 'rgba(255, 255, 255, 0)',
        boxShadow: scrolled ? '0 4px 15px rgba(0,0,0,0.1)' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 w-full z-50 border-t border-gray-200"
      style={{ WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none' }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={handleScrollTop}
          className="font-bold text-2xl select-none cursor-pointer hover:text-blue-600 transition"
          tabIndex={0}
          role="button"
          aria-label="Scroll to top"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleScrollTop();
          }}
        >
          Your Name
        </h1>

        {/* Desktop menu */}
        <div className="hidden sm:flex space-x-8 text-gray-700 font-medium items-center">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          <button
            onClick={openResume}
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition ml-4"
          >
            Resume
          </button>
        </div>

        {/* Hamburger menu icon */}
        <div className="sm:hidden flex items-center">
          <button
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          >
            {menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
          </button>
        </div>
      </nav>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="sm:hidden bg-white/70 backdrop-blur-lg border-t border-gray-200 shadow-md overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-6 font-medium text-gray-700 text-lg">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Skills</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</a>
              <button
                onClick={() => {
                  openResume();
                  setMenuOpen(false);
                }}
                className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition"
              >
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
