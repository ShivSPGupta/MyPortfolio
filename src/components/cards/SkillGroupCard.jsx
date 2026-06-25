import { motion as Motion } from "motion/react";

export default function SkillGroupCard({ group, variants }) {
  return (
    <Motion.div
      variants={variants}
      className="w-full max-w-4xl mx-auto rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-lg border border-white/20 text-center"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">{group.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{group.description}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {group.skills.map(({ name, icon }) => (
          <Motion.div
            key={name}
            className="flex w-24 flex-col items-center justify-center space-y-3 text-center"
            whileHover={{ scale: 1.12, color: "#2563EB" }}
            transition={{ type: "spring", stiffness: 300 }}
            title={name}
            aria-label={name}
          >
            <div className="text-5xl transition-colors duration-300">{icon}</div>
            <span className="text-sm font-semibold text-gray-700">{name}</span>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
}
