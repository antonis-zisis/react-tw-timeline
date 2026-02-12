import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "../src";
import type { TimelineItem } from "../src";
import { sampleItems, minimalItems } from "./data";

const meta = {
  title: "Timeline",
  component: Timeline,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-4xl p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const DarkMode: Story = {
  args: {
    items: sampleItems,
  },
  decorators: [
    (Story) => (
      <div className="dark rounded-lg bg-slate-950 p-8">
        <Story />
      </div>
    ),
  ],
};

export const CustomRenderItem: Story = {
  args: {
    items: sampleItems,
    renderItem: (item: TimelineItem) => (
      <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950">
        <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">
          {item.title}
        </h3>
        <p className="mt-2 text-blue-600 dark:text-blue-400">
          {item.description}
        </p>
      </div>
    ),
  },
};

export const TealTheme: Story = {
  args: {
    items: sampleItems,
    lineColor: "bg-teal-600 dark:bg-teal-400",
    accentColor: "text-teal-600 dark:text-teal-400",
  },
};

export const RedTheme: Story = {
  args: {
    items: sampleItems,
    lineColor: "bg-red-800 dark:bg-red-400",
    accentColor: "text-red-800 dark:text-red-400",
  },
};

export const NoAnimations: Story = {
  args: {
    items: sampleItems,
    animated: false,
  },
};

export const MinimalItems: Story = {
  args: {
    items: minimalItems,
  },
};
