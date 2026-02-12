# react-tw-timeline

A vertical center-line timeline component for React + Tailwind CSS with scroll-triggered animations and dark mode support.

[Live Storybook Demo](https://antoniszisis.github.io/react-tw-timeline/)

## Installation

```bash
pnpm add react-tw-timeline
# or
npm install react-tw-timeline
```

### Optional: Scroll Animations

Install `framer-motion` for scroll-triggered animations. Without it, the component renders without animations.

```bash
pnpm add framer-motion
```

### Tailwind CSS Setup

The package ships its `src/` directory so Tailwind can scan the component classes.

**Tailwind v4** — add to your CSS file:

```css
@source "../node_modules/react-tw-timeline/src";
```

**Tailwind v3** — add to `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ...your paths
    "./node_modules/react-tw-timeline/src/**/*.{ts,tsx}",
  ],
};
```

## Usage

```tsx
import { Timeline } from "react-tw-timeline";

const items = [
  {
    id: "1",
    title: "Senior Engineer",
    subtitle: "Acme Corp",
    description: "Led the platform team.",
    date: "2023 - Present",
    tags: ["React", "TypeScript"],
  },
  {
    id: "2",
    title: "Engineer",
    subtitle: "Startup Inc",
    description: "Built the dashboard.",
    date: "2021 - 2023",
  },
];

function App() {
  return <Timeline items={items} />;
}
```

## Props

| Prop          | Type                         | Default                                | Description                       |
| ------------- | ---------------------------- | -------------------------------------- | --------------------------------- |
| `items`       | `TimelineItem[]`             | required                               | Array of timeline entries         |
| `renderItem`  | `(item, index) => ReactNode` | —                                      | Custom card renderer              |
| `lineColor`   | `string`                     | `"bg-slate-800 dark:bg-slate-300"`     | Tailwind classes for line & dot   |
| `accentColor` | `string`                     | `"text-slate-800 dark:text-slate-300"` | Tailwind classes for date & arrow |
| `animated`    | `boolean`                    | `true`                                 | Enable framer-motion animations   |
| `className`   | `string`                     | —                                      | Additional container classes      |

### TimelineItem

```ts
type TimelineItem = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  tags?: string[];
};
```

## Custom Rendering

Use the `renderItem` prop for full control over card content:

```tsx
<Timeline
  items={items}
  renderItem={(item, index) => (
    <div className="rounded-lg border p-4">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )}
/>
```

## Theming

Pass Tailwind color classes to customize the timeline:

```tsx
<Timeline
  items={items}
  lineColor="bg-teal-600 dark:bg-teal-400"
  accentColor="text-teal-600 dark:text-teal-400"
/>
```

## Dark Mode

The component supports dark mode out of the box using Tailwind's `dark:` variant. Wrap your app (or a parent element) with the `dark` class:

```html
<div class="dark">
  <!-- Timeline will render in dark mode -->
</div>
```

All default colors adapt automatically — cards, text, chips, line, and arrow all switch to dark-friendly tones.

## Exports

- `Timeline` — main component
- `TimelineCard` — default card component
- `TimelineChip` — tag chip sub-component
- `TimelineItem` (type) — item data shape
- `TimelineProps` (type) — component props

## License

MIT
