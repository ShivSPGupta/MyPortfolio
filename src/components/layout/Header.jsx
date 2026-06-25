import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { Menu, Close } from "@mui/icons-material";

export default function Header({ scrolled, openResume }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["about", "skills", "projects", "contact"];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navigateToSection = (sectionId) => {
    setMenuOpen(false);

    let attempts = 0;

    const tryScroll = () => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${sectionId}`);
        return;
      }

      if (attempts < 10) {
        attempts += 1;
        window.setTimeout(tryScroll, 100);
      }
    };

    window.requestAnimationFrame(tryScroll);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -8,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        height: { duration: 0.28, ease: "easeOut" },
        opacity: { duration: 0.18, ease: "easeOut" },
        y: { duration: 0.24, ease: "easeOut" },
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <Motion.header
        animate={{
          boxShadow: scrolled
            ? "0 12px 30px rgba(15, 23, 42, 0.08)"
            : "none",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-full border-b border-white/30 bg-white/20 text-slate-900 shadow-none backdrop-blur-xl supports-backdrop-filter:bg-white/20"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <button
            type="button"
            onClick={handleScrollTop}
            className="group flex min-w-0 items-center gap-3 text-left"
            aria-label="Scroll to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold tracking-[0.2em] text-white shadow-lg shadow-slate-900/20 transition-transform duration-300 group-hover:scale-105">
              SS
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">
                Portfolio
              </span>
              <span className="block truncate text-base font-bold tracking-tight text-slate-950">
                Shiv Shankar Gupta
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigateToSection(item);
                }}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <button
              onClick={openResume}
              className="ml-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800"
            >
              Resume
            </button>
          </div>

          <div className="md:hidden">
            <Motion.button
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.94 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            >
              <Motion.span
                animate={{ rotate: menuOpen ? 90 : 0, scale: menuOpen ? 0.95 : 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                {menuOpen ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
              </Motion.span>
            </Motion.button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <Motion.div
              id="mobile-navigation"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="overflow-hidden border-t border-white/30 bg-white/75 px-4 pb-5 shadow-lg backdrop-blur-xl md:hidden"
            >
              <Motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
                  },
                }}
                className="grid gap-3 pt-4 text-sm font-medium"
              >
                {navItems.map((item) => (
                  <Motion.a
                    key={item}
                    variants={menuItemVariants}
                    href={`#${item}`}
                    onClick={(event) => {
                      event.preventDefault();
                      navigateToSection(item);
                    }}
                    className="rounded-xl px-4 py-3 text-slate-700 transition duration-200 hover:bg-slate-900/5 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Motion.a>
                ))}
                <Motion.button
                  variants={menuItemVariants}
                  onClick={() => {
                    openResume();
                    setMenuOpen(false);
                  }}
                  className="rounded-xl bg-slate-950 px-4 py-3 text-left font-semibold text-white shadow-lg shadow-slate-950/15 transition duration-200 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
                >
                  Resume
                </Motion.button>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.header>
    </div>
  );
}
