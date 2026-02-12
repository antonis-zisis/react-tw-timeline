import { cn } from "./utils";

export type TimelineChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function TimelineChip({ children, className }: TimelineChipProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-slate-300 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
