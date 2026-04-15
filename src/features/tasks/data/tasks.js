export const initialGroups = [
  { id: "meeting", title: "Meeting with teamwork" },
  { id: "research", title: "Research & Inspiration" },
  { id: "design", title: "Design System Setup" },
];

export const initialTasks = [
  {
    id: 1,
    title: "To review the new website design with update features.",
    groupId: "meeting",
    status: "in-process",
    priority: true,
  },
  {
    id: 2,
    title: "Prepare notes for weekly follow-up.",
    groupId: "meeting",
    status: "pending",
    priority: false,
  },
  {
    id: 3,
    title: "Define project goal (what is this website for?)",
    groupId: "research",
    status: "pending",
    priority: true,
  },
  {
    id: 4,
    title: "Collect visual references (UI inspiration, layouts)",
    groupId: "research",
    status: "completed",
    priority: false,
  },
  {
    id: 5,
    title: "Identify target audience",
    groupId: "research",
    status: "pending",
    priority: false,
  },
  {
    id: 6,
    title: "Analyze competitors / similar websites",
    groupId: "research",
    status: "pending",
    priority: false,
  },
  {
    id: 7,
    title: "Choose color palette",
    groupId: "design",
    status: "in-process",
    priority: false,
  },
  {
    id: 8,
    title: "Define typography (headings, body text)",
    groupId: "design",
    status: "pending",
    priority: false,
  },
  {
    id: 9,
    title: "Create spacing system (margins, paddings)",
    groupId: "design",
    status: "completed",
    priority: false,
  },
];