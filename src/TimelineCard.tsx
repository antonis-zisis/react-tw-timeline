import type { TimelineItem } from "./types";
import { cn, MotionDiv } from "./utils";
import { TimelineChip } from "./TimelineChip";

export type TimelineCardProps = {
  item: TimelineItem;
  animated?: boolean;
  className?: string;
};

export function TimelineCard({ item, animated, className }: TimelineCardProps) {
  const Wrapper = animated ? MotionDiv : "div";
  const animationProps = animated
    ? {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: 0.2 },
        viewport: { once: true },
      }
    : {};

  return (
    <Wrapper
      className={cn("rounded-lg bg-slate-200 p-4 dark:bg-slate-800", className)}
      {...animationProps}
    >
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
        {item.title}
      </h3>
      {item.subtitle && (
        <h4 className="text-base text-slate-600 dark:text-slate-400">
          {item.subtitle}
        </h4>
      )}
      <p className="mt-3 text-sm font-normal text-slate-600 dark:text-slate-400">
        {item.description}
      </p>
      {item.tags && item.tags.length > 0 && (
        <ul className="mt-2 flex flex-wrap" aria-label="Tags">
          {item.tags.map((tag) => (
            <li key={tag} className="mt-1 mr-2">
              <TimelineChip>{tag}</TimelineChip>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
}
