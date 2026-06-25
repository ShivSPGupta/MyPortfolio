import { motion as Motion } from "motion/react";

export default function InfoCard({
  title,
  subtitle,
  period,
  description,
  variants,
}) {
  return (
    <Motion.div
      variants={variants}
      whileHover={{ scale: 1.03 }}
      className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
        <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
        <span className="text-gray-600 italic mt-2 sm:mt-0">{period}</span>
      </div>
      <h4 className="text-lg font-medium text-gray-700 mb-4">{subtitle}</h4>
      <p className="text-gray-800">{description}</p>
    </Motion.div>
  );
}
