import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Close } from "@mui/icons-material";

export default function Header({ scrolled, openResume }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 border-t border-gray-200
      transition-all duration-300
      ${scrolled ? "backdrop-blur-md bg-white/40 shadow-md" : "bg-transparent"}
    `}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={handleScrollTop}
          className="font-bold text-2xl cursor-pointer hover:text-blue-600 transition"
          tabIndex={0}
          role="button"
        >
          Shiv Shankar Gupta
        </h1>

        {/* Desktop */}
        <div className="hidden sm:flex space-x-8 text-gray-700 font-medium items-center">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-blue-600 transition">
              {item.label}
            </a>
          ))}
          <button
            onClick={openResume}
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
          >
            Resume
          </button>
        </div>

        {/* Mobile button */}
        <button
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-700 hover:text-blue-600"
        >
          {menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-white/70 backdrop-blur-lg border-t border-gray-200 shadow-md"
          >
            <div className="flex flex-col items-center py-6 space-y-6 font-medium text-gray-700 text-lg">
              {links.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}

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
    </header>
  );
}
