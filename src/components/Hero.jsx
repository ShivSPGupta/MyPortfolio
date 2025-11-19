import React from "react";
import { motion} from "motion/react";
import { Button } from "@mui/material";
import SocialLinks from './SocialLinks';




const phrases = ["Full Stack Developer", "Cybersecurity Enthusiast", "MERN", "Automation"];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      setDisplayedText(phrases[currentPhrase].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === phrases[currentPhrase].length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setDisplayedText("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentPhrase]);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-0">
      {/* Main Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg sm:text-7xl mb-6"
      >
        Hi, I'm Your Name
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl text-xl text-gray-700 dark:text-gray-600 drop-shadow-md"
      >
        Frontend developer creating seamless user experiences with React, Tailwind, Material UI & Framer Motion.
      </motion.p>

      {/* Typewriter Rolling Text */}
      <motion.p
        key={currentPhrase}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-md"
      >
        {displayedText}
        <span className="ml-1 inline-block w-[2px] bg-current animate-[blink_1s_infinite]" />
      </motion.p>

      {/* ... existing Hero component code ... */}

<motion.div
  initial={{ scale: 0.7, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 1.5, duration: 0.6 }}
  className="mt-7"
>
  <SocialLinks />
</motion.div>

      {/* Button */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="mt-10"
      >
        <Button variant="contained" color="primary" href="#contact" size="large" sx={{ px: 6, py: 1.8 }}>
          Get In Touch
        </Button>
      </motion.div>
    </section>
  );
}
