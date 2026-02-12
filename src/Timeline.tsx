import type { TimelineProps } from "./types";
import { cn } from "./utils";
import { TimelineItemRow } from "./TimelineItem";

export function Timeline({
  items,
  renderItem,
  lineColor = "bg-slate-800 dark:bg-slate-300",
  accentColor = "text-slate-800 dark:text-slate-300",
  animated = true,
  className,
}: TimelineProps) {
  return (
    <div className={cn("relative w-full pt-10 pb-20", className)}>
      {/* Top Arrow */}
      <div className="absolute top-[-8px] left-1/2 -translate-x-1/2">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0L12 8H0L6 0Z"
            fill="currentColor"
            className={accentColor}
          />
        </svg>
      </div>

      {/* Vertical Line */}
      <div
        className={cn(
          "absolute top-0 left-1/2 h-full w-px -translate-x-1/2",
          lineColor,
        )}
      />

      {/* Timeline Items */}
      <div className="flex flex-col space-y-8">
        {items.map((item, index) => (
          <TimelineItemRow
            key={item.id}
            item={item}
            index={index}
            renderItem={renderItem}
            lineColor={lineColor}
            accentColor={accentColor}
            animated={animated}
          />
        ))}
      </div>
    </div>
  );
}
