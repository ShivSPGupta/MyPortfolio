import { motion as Motion } from "motion/react";
import InfoCard from "../cards/InfoCard";
import SectionTitle from "../common/SectionTitle";
import { education } from "../../data/education";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <Motion.section
      id="education"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionTitle className="mb-12">Education & Certification</SectionTitle>
      <div className="space-y-10">
        {education.map(({ title, institution, period, detail }) => (
          <InfoCard
            key={`${institution}-${period}`}
            title={title}
            subtitle={institution}
            period={period}
            description={detail}
            variants={itemVariants}
          />
        ))}
      </div>
    </Motion.section>
  );
}
