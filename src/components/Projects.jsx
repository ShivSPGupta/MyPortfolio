import React from "react";
import { motion as Motion } from "motion/react";

const STACK_PREVIEW_LIMIT = 5;
const FALLBACK_PROJECT_IMAGE = "/software_developer.png";
const PROJECT_SCREENSHOT_VERSION = "2026-06-24";

const getProjectScreenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&cacheBust=${PROJECT_SCREENSHOT_VERSION}`;

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Modern developer portfolio with polished motion, responsive sections, and a clean glass-style interface.",
    stack: ["React", "Tailwind CSS", "Motion", "Material UI", "Vite"],
    features: ["Responsive layout", "Animated sections", "Resume modal"],
    liveUrl: "https://my-portfolio-six-azure-30.vercel.app/",
  },
  {
    id: 2,
    title: "Flixxit App",
    description:
      "Netflix-style movie discovery platform with JWT auth, protected routes, trending rows, favorites, trailer playback, and TMDb/YouTube integration.",
    stack: [
      "React",
      "Redux Toolkit",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "TMDb API",
      "YouTube Data API",
    ],
    features: [
      "JWT authentication",
      "Cache-optimized search",
      "Trailer lookup",
      "Personal favorites list",
    ],
    liveUrl: "https://flixxit-app.vercel.app/",
  },
  {
    id: 3,
    title: "Figma to React",
    description:
      "Figma design translated into a modern responsive React experience with clean structure and reusable UI sections.",
    stack: ["React", "Tailwind CSS", "Vite"],
    features: ["Pixel-accurate UI", "Responsive sections", "Reusable components"],
    liveUrl: "https://figmatask-digital-agency.vercel.app/",
  },
  {
    id: 4,
    title: "Productivity Dashboard",
    description:
      "Full-featured planning dashboard with secure accounts, per-user task storage, smart task recommendations, and weather-aware productivity insights.",
    stack: [
      "React",
      "Redux Toolkit",
      "Firebase Auth",
      "Cloud Firestore",
      "React Router",
      "Bootstrap",
      "Axios",
      "Vite",
      "OpenWeather API",
    ],
    features: [
      "Secure auth flow",
      "Per-user task storage",
      "Smart recommendations",
      "Weather-aware planning",
    ],
    liveUrl: "https://todo-app-intwithapi.vercel.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  const [expandedStacks, setExpandedStacks] = React.useState({});

  const toggleStack = (projectId) => {
    setExpandedStacks((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <Motion.section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Projects
      </h2>
      <div className="grid items-stretch gap-10 lg:grid-cols-2">
        {projects.map(
          (
            { id, title, description, stack, features, liveUrl },
            index
          ) => {
            const isExpanded = Boolean(expandedStacks[id]);
            const visibleStack = isExpanded
              ? stack
              : stack.slice(0, STACK_PREVIEW_LIMIT);
            const hiddenStackCount = stack.length - STACK_PREVIEW_LIMIT;
            const projectNumber = String(id).padStart(2, "0");
            const isCenteredLastCard =
              projects.length % 2 === 1 && index === projects.length - 1;

            return (
              <Motion.div
                key={id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className={`group relative flex h-full w-full transform-gpu flex-col overflow-hidden rounded-2xl border border-white/25 bg-white/20 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-xl ${
                  isCenteredLastCard
                    ? "lg:col-span-2 lg:mx-auto lg:max-w-[calc((100%-2.5rem)/2)]"
                    : ""
                }`}
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56">
                  <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
                    <span className="rounded-full border border-white/30 bg-slate-950/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                      Project {projectNumber}
                    </span>
                  </div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/10" />
                  <img
                    src={getProjectScreenshotUrl(liveUrl)}
                    alt={`${title} preview`}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(event) => {
                      if (event.currentTarget.src.endsWith(FALLBACK_PROJECT_IMAGE)) {
                        return;
                      }

                      event.currentTarget.src = FALLBACK_PROJECT_IMAGE;
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-700 sm:min-h-[4.5rem]">
                    {description}
                  </p>
                  <div className="mt-5 sm:min-h-[5.75rem]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Built with
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {visibleStack.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/30 bg-white/55 px-3 py-1 text-xs font-medium leading-5 text-slate-700 backdrop-blur-sm"
                        >
                          {tool}
                        </span>
                      ))}
                      {hiddenStackCount > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleStack(id)}
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Hide" : "Show"} extra tools for ${title}`}
                          className="rounded-full border border-white/30 bg-slate-100/70 px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-sm transition hover:bg-slate-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
                        >
                          {isExpanded
                            ? "Show less"
                            : `+${hiddenStackCount} more`}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mt-5 sm:min-h-[5.75rem]">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Key features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/30 bg-white/55 px-3 py-1 text-xs font-medium leading-5 text-slate-700 backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-auto sm:pt-8">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-max rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </Motion.div>
            );
          }
        )}
      </div>
    </Motion.section>
  );
}
