import type { TimelineItem as TimelineItemType } from "./types";
import { cn, MotionDiv } from "./utils";
import { TimelineCard } from "./TimelineCard";

export type TimelineItemProps = {
  item: TimelineItemType;
  index: number;
  renderItem?: (item: TimelineItemType, index: number) => React.ReactNode;
  lineColor?: string;
  accentColor?: string;
  animated?: boolean;
};

export function TimelineItemRow({
  item,
  index,
  renderItem,
  lineColor = "bg-slate-800 dark:bg-slate-300",
  accentColor = "text-slate-800 dark:text-slate-300",
  animated = true,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  const RowWrapper = animated ? MotionDiv : "div";
  const DateWrapper = animated ? MotionDiv : "div";

  const rowAnimationProps = animated
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        viewport: { once: true, amount: 0.2 },
      }
    : {};

  const dateAnimationProps = animated
    ? {
        initial: { opacity: 0, x: isEven ? -30 : 30 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.3 },
        viewport: { once: true },
      }
    : {};

  return (
    <RowWrapper
      className={cn(
        "relative flex flex-col items-center justify-between md:flex-row",
        isEven ? "md:flex-row" : "md:flex-row-reverse",
      )}
      {...rowAnimationProps}
    >
      {/* Timeline Dot */}
      <div
        className={cn(
          "absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full",
          lineColor,
        )}
      />

      {/* Card side */}
      <div className={cn("w-full md:w-1/2", isEven ? "md:pr-4" : "md:pl-4")}>
        {renderItem ? (
          renderItem(item, index)
        ) : (
          <TimelineCard item={item} animated={animated} />
        )}
      </div>

      {/* Date side */}
      <DateWrapper
        className={cn(
          "flex w-full md:w-1/2",
          isEven ? "md:justify-start md:pl-4" : "md:justify-end md:pr-4",
        )}
        {...dateAnimationProps}
      >
        <span className={cn("text-sm font-semibold", accentColor)}>
          {item.date}
        </span>
      </DateWrapper>
    </RowWrapper>
  );
}
