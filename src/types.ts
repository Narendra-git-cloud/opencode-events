export type TodoFilter = "All" | "Active" | "Completed";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
