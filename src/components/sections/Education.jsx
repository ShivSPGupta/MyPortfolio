import { motion as Motion } from "motion/react";
import {
  createStaggerContainer,
  fadeFromRight,
  revealViewport,
} from "../../animations/motionVariants";
import InfoCard from "../cards/InfoCard";
import SectionTitle from "../common/SectionTitle";
import { education } from "../../data/education";

const educationVariants = createStaggerContainer(0.2);

export default function Education() {
  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-20"
    >
      <SectionTitle className="mb-12">Education & Certification</SectionTitle>
      <Motion.div
        className="space-y-10"
        variants={educationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        {education.map(({ title, institution, period, detail }) => (
          <InfoCard
            key={`${institution}-${period}`}
            title={title}
            subtitle={institution}
            period={period}
            description={detail}
            variants={fadeFromRight}
          />
        ))}
      </Motion.div>
    </section>
  );
}
