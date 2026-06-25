import { motion as Motion } from "motion/react";
import InfoCard from "../cards/InfoCard";
import SectionTitle from "../common/SectionTitle";
import { workHistory } from "../../data/experience";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <Motion.section
      id="experience"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionTitle className="mb-12">Experience</SectionTitle>
      <div className="space-y-10">
        {workHistory.map(({ role, company, period, description }) => (
          <InfoCard
            key={`${company}-${period}`}
            title={role}
            subtitle={company}
            period={period}
            description={description}
            variants={itemVariants}
          />
        ))}
      </div>
    </Motion.section>
  );
}
