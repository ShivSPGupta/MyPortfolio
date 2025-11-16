import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumePopup from './components/ResumePopup';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} openResume={() => setResumeOpen(true)} />
      <main className="pt-20 max-w-5xl mx-auto px-4 space-y-36">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ResumePopup open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
