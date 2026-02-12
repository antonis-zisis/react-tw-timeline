import type { TimelineItem } from "../src";

export const sampleItems: TimelineItem[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    subtitle: "Acme Corp",
    description:
      "Led the migration of legacy systems to a modern microservices architecture. Reduced deployment time by 60% and improved system reliability.",
    date: "2023 - Present",
    tags: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    id: "2",
    title: "Software Engineer",
    subtitle: "Startup Inc",
    description:
      "Built and maintained the customer-facing dashboard used by over 10,000 daily active users. Implemented real-time data visualization features.",
    date: "2021 - 2023",
    tags: ["React", "GraphQL", "PostgreSQL"],
  },
  {
    id: "3",
    title: "Junior Developer",
    subtitle: "Tech Solutions Ltd",
    description:
      "Developed internal tools and contributed to the main product. Participated in code reviews and agile ceremonies.",
    date: "2019 - 2021",
    tags: ["JavaScript", "Vue.js", "Python"],
  },
  {
    id: "4",
    title: "Computer Science Degree",
    subtitle: "State University",
    description:
      "Graduated with honors. Focused on algorithms, data structures, and software engineering principles.",
    date: "2015 - 2019",
    tags: ["Java", "C++", "Algorithms"],
  },
];

export const minimalItems: TimelineItem[] = [
  {
    id: "1",
    title: "First Event",
    description: "This is the first event in the timeline.",
    date: "2024",
  },
  {
    id: "2",
    title: "Second Event",
    description: "This is the second event in the timeline.",
    date: "2023",
  },
];
