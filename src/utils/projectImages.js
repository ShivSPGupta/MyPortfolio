export const FALLBACK_PROJECT_IMAGE = "/software_developer.png";
export const PROJECT_SCREENSHOT_VERSION = "2026-06-25";

export const getProjectScreenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(
    url
  )}&screenshot=true&meta=false&embed=screenshot.url&cacheBust=${PROJECT_SCREENSHOT_VERSION}`;
