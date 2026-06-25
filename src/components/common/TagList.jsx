export default function TagList({
  visibleItems,
  hiddenCount = 0,
  isExpanded = false,
  onToggle,
  toggleLabel,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {visibleItems.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/30 bg-white/55 px-3 py-1 text-xs font-medium leading-5 text-slate-700 backdrop-blur-sm"
        >
          {item}
        </span>
      ))}
      {hiddenCount > 0 && onToggle && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-label={toggleLabel}
          className="rounded-full border border-white/30 bg-slate-100/70 px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-sm transition hover:bg-slate-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
        >
          {isExpanded ? "Show less" : `+${hiddenCount} more`}
        </button>
      )}
    </div>
  );
}
