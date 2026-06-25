import React, { lazy, Suspense, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import BackgroundEffect from "./components/layout/BackgroundEffect";
import useScrollState from "./hooks/useScrollState";

const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));
const ResumePopup = lazy(() => import("./components/common/ResumePopup"));

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const scrolled = useScrollState(50);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffect />
      <Header scrolled={scrolled} openResume={() => setResumeOpen(true)} />
      <main className="relative z-10 pt-20 max-w-5xl mx-auto px-4 space-y-36 overflow-hidden">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      {resumeOpen && (
        <Suspense fallback={null}>
          <ResumePopup open={resumeOpen} onClose={() => setResumeOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
