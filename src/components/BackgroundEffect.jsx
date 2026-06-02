import React from "react";
import { motion as Motion } from "motion/react";

const blobs = [
  {
    className: "left-[-10rem] top-[-6rem] h-[24rem] w-[24rem] bg-cyan-400/30",
    animate: { x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] },
  },
  {
    className: "right-[-8rem] top-[18rem] h-[28rem] w-[28rem] bg-indigo-500/25",
    animate: { x: [0, -30, 0], y: [0, 24, 0], scale: [1, 1.06, 1] },
  },
  {
    className:
      "left-[22%] bottom-[-10rem] h-[20rem] w-[20rem] bg-fuchsia-500/20",
    animate: { x: [0, 24, 0], y: [0, -26, 0], scale: [1, 1.05, 1] },
  },
];

export default function BackgroundEffect() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(241,245,249,0.92)_45%,_rgba(226,232,240,1)_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(255,255,255,0.18)_60%,rgba(255,255,255,0.45)_100%)]" />

      {blobs.map(({ className, animate }, index) => (
        <Motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${className}`}
          animate={animate}
          transition={{
            duration: 16 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-100 to-transparent" />
    </div>
  );
}
