import { List } from "@ui5/webcomponents-react";

import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: readonly Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <List
      className="todo-list"
      separators="None"
      noDataText="Nothing to show for this filter."
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}
