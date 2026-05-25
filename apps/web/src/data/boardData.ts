export const columns = [
  {
    id: "backlog",
    title: "Backlog",
  },
  {
    id: "planned",
    title: "Planned",
  },
  {
    id: "progress",
    title: "In Progress",
  },
  {
    id: "review",
    title: "Review",
  },
]

export const issues = [
  {
    id: "1",
    title: "Implement JWT authentication",
    priority: "high",
    assignee: "HW",
    columnId: "backlog",
  },
  {
    id: "2",
    title: "Build realtime websocket gateway",
    priority: "medium",
    assignee: "TK",
    columnId: "planned",
  },
  {
    id: "3",
    title: "Design issue analytics dashboard",
    priority: "low",
    assignee: "AL",
    columnId: "progress",
  },
]