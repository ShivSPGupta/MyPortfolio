export const revealViewport = {
  once: true,
  amount: 0.2,
};

export const createStaggerContainer = (staggerChildren = 0.15) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
    },
  },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const cardFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const softCardHover = {
  scale: 1.03,
};

export const skillHover = {
  scale: 1.12,
  color: "#2563EB",
};

export const springQuick = {
  type: "spring",
  stiffness: 300,
};
