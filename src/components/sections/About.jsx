import { motion as Motion } from "motion/react";
import { fadeUp, revealViewport } from "../../animations/motionVariants";
import SocialLinks from "../common/SocialLinks";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center"
    >
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About Me</h2>

        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          I'm a Full Stack Developer with hands-on experience building scalable,
          production-ready web applications using React.js, Next.js, Node.js,
          Express.js, NestJS, and MongoDB. I specialize in developing responsive
          user interfaces, secure backend services, REST APIs, and realtime
          applications focused on performance, scalability, and user experience.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          I have worked across frontend and backend systems involving JWT
          authentication, role-based access control (RBAC), Redis caching,
          Socket.IO realtime communication, PostgreSQL, CI/CD pipelines, Docker,
          and deployment automation. I enjoy solving complex problems, optimizing
          application performance, and building maintainable software solutions.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
          Passionate about continuous learning and collaborative development, I
          aim to create impactful digital products that deliver reliable user
          experiences and business value through clean architecture and efficient
          engineering practices.
        </p>

        <div className="mt-10">
          <SocialLinks />
        </div>
      </Motion.div>
    </section>
  );
}
