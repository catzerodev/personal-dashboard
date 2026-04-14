export const initialGroups = [
  { id: "meeting", title: "Meeting" },
  { id: "research", title: "Research" },
  { id: "design", title: "Design" },
];

export const initialTasks = [
  {
    id: 1,
    title: "Meet with teamwork at 3pm",
    groupId: "meeting",
    status: "in-process",
    priority: true,
  },
  {
    id: 2,
    title: "Prepare notes for weekly follow-up",
    groupId: "meeting",
    status: "pending",
    priority: false,
  },
  {
    id: 3,
    title: "Search visual references",
    groupId: "research",
    status: "pending",
    priority: true,
  },
  {
    id: 4,
    title: "Read article about dashboard UX",
    groupId: "research",
    status: "completed",
    priority: false,
  },
  {
    id: 5,
    title: "Create hero section layout",
    groupId: "design",
    status: "in-process",
    priority: false,
  },
  {
    id: 6,
    title: "Adjust spacing and typography",
    groupId: "design",
    status: "completed",
    priority: false,
  },
];