import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { Menu, Close } from "@mui/icons-material";

export default function Header({ scrolled, openResume }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -12, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.28, ease: "easeOut" },
    },
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-3 sm:px-4">
      <Motion.header
        animate={{
          y: scrolled ? 0 : 0,
          scale: scrolled ? 1 : 1,
          boxShadow: scrolled
            ? "0 18px 45px rgba(15, 23, 42, 0.12)"
            : "0 10px 30px rgba(15, 23, 42, 0.08)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="mx-auto max-w-6xl overflow-hidden rounded-b-2xl border-x border-b border-white/50 bg-white/55 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/45"
        style={{ WebkitBackdropFilter: "blur(18px)" }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        <nav className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <button
            type="button"
            onClick={handleScrollTop}
            className="group flex items-center gap-3 text-left"
            aria-label="Scroll to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold tracking-[0.2em] text-white shadow-lg shadow-slate-900/20 transition-transform duration-300 group-hover:scale-105">
              SS
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">
                Portfolio
              </span>
              <span className="block text-base font-bold tracking-tight text-slate-950">
                Shiv Shankar Gupta
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
            >
              About
            </a>
            <a
              href="#skills"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
            >
              Contact
            </a>
            <button
              onClick={openResume}
              className="ml-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Resume
            </button>
          </div>

          <div className="md:hidden">
            <button
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 text-slate-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/20"
            >
              {menuOpen ? <Close fontSize="medium" /> : <Menu fontSize="medium" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <Motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="md:hidden border-t border-white/60 bg-white/75 px-4 pb-5 backdrop-blur-2xl"
            >
              <div className="grid gap-3 pt-4 text-sm font-medium">
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-950"
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    openResume();
                    setMenuOpen(false);
                  }}
                  className="rounded-xl bg-slate-950 px-4 py-3 text-left font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-slate-800"
                >
                  Resume
                </button>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.header>
    </div>
  );
}
