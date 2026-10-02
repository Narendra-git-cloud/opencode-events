import { Button, CheckBox, ListItemStandard } from "@ui5/webcomponents-react";

import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const className = todo.completed
    ? "todo-item todo-item--completed"
    : "todo-item";

  return (
    <ListItemStandard
      className={className}
      text={todo.title}
      type="Inactive"
      image={
        <CheckBox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          accessibleName={`Mark "${todo.title}" as ${
            todo.completed ? "not done" : "done"
          }`}
        />
      }
      deleteButton={
        <Button
          icon="SAP-icons-v4/delete"
          design="Transparent"
          tooltip={`Delete "${todo.title}"`}
          onClick={() => onDelete(todo.id)}
        />
      }
    />
  );
}
