import type { Todo } from "../types";

/**
 * Seed data used as the initial in-memory state of the app.
 * There is no backend, so this is the only source of tasks on first load.
 */
export const mockTodos: Todo[] = [
  {
    id: "todo-1",
    title: "Scaffold the Vite + React + TypeScript project",
    completed: true,
  },
  {
    id: "todo-2",
    title: "Install and configure UI5 Web Components for React",
    completed: true,
  },
  {
    id: "todo-3",
    title: "Implement add, complete and delete actions",
    completed: false,
  },
  {
    id: "todo-4",
    title: "Add All / Active / Completed filtering",
    completed: false,
  },
  {
    id: "todo-5",
    title: "Show the remaining-tasks counter in the header",
    completed: false,
  },
  {
    id: "todo-6",
    title: "Write the README and verify the production build",
    completed: false,
  },
];
