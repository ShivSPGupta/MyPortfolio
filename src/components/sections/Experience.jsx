import { motion as Motion } from "motion/react";
import {
  createStaggerContainer,
  fadeFromLeft,
  revealViewport,
} from "../../animations/motionVariants";
import InfoCard from "../cards/InfoCard";
import SectionTitle from "../common/SectionTitle";
import { workHistory } from "../../data/experience";

const timelineVariants = createStaggerContainer(0.2);

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
    >
      <SectionTitle className="mb-12">Experience</SectionTitle>
      <Motion.div
        className="space-y-10"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        {workHistory.map(({ role, company, period, description }) => (
          <InfoCard
            key={`${company}-${period}`}
            title={role}
            subtitle={company}
            period={period}
            description={description}
            variants={fadeFromLeft}
          />
        ))}
      </Motion.div>
    </section>
  );
}
