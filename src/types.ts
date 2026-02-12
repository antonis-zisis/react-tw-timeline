export type TimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  tags?: string[];
};

export type TimelineProps = {
  items: TimelineItem[];
  renderItem?: (item: TimelineItem, index: number) => React.ReactNode;
  lineColor?: string;
  accentColor?: string;
  animated?: boolean;
  className?: string;
};
