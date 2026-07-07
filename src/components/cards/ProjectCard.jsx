import { motion as Motion } from "motion/react";
import TagList from "../common/TagList";
import { cardFadeUp, softCardHover } from "../../animations/motionVariants";
import {
  FALLBACK_PROJECT_IMAGE,
  getProjectScreenshotUrl,
} from "../../utils/projectImages";

const STACK_PREVIEW_LIMIT = 5;

export default function ProjectCard({
  project,
  index,
  totalProjects,
  isStackExpanded,
  onToggleStack,
}) {
  const { id, title, description, stack, features, liveUrl } = project;
  const visibleStack = isStackExpanded
    ? stack
    : stack.slice(0, STACK_PREVIEW_LIMIT);
  const hiddenStackCount = stack.length - STACK_PREVIEW_LIMIT;
  const projectNumber = String(id).padStart(2, "0");
  const isCenteredLastCard =
    totalProjects % 2 === 1 && index === totalProjects - 1;

  return (
    <Motion.div
      variants={cardFadeUp}
      whileHover={softCardHover}
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
        <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/35 via-transparent to-slate-950/10" />
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
        <h3 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700 sm:min-h-18">{description}</p>

        <div className="mt-5 sm:min-h-23">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Built with
          </p>
          <TagList
            visibleItems={visibleStack}
            hiddenCount={hiddenStackCount}
            isExpanded={isStackExpanded}
            onToggle={onToggleStack}
            toggleLabel={`${isStackExpanded ? "Hide" : "Show"} extra tools for ${title}`}
          />
        </div>

        <div className="mt-5 sm:min-h-23">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Key features
          </p>
          <TagList visibleItems={features} />
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
