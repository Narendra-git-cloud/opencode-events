import { useMemo, useState } from "react";
import { Card, CardHeader } from "@ui5/webcomponents-react";

import AddTaskForm from "./components/AddTaskForm";
import FilterBar from "./components/FilterBar";
import RemainingTasks from "./components/RemainingTasks";
import TodoList from "./components/TodoList";
import { mockTodos } from "./data/mockTodos";
import type { Todo, TodoFilter } from "./types";

const FILTERS: readonly TodoFilter[] = ["All", "Active", "Completed"];

function matchesFilter(todo: Todo, filter: TodoFilter): boolean {
  switch (filter) {
    case "Active":
      return !todo.completed;
    case "Completed":
      return todo.completed;
    default:
      return true;
  }
}

let addCounter = 0;

function createTodo(title: string): Todo {
  addCounter += 1;
  return { id: `todo-new-${addCounter}`, title, completed: false };
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [filter, setFilter] = useState<TodoFilter>("All");

  const visibleTodos = useMemo(
    () => todos.filter((todo) => matchesFilter(todo, filter)),
    [todos, filter],
  );

  const remainingCount = useMemo(
    () => todos.reduce((count, todo) => (todo.completed ? count : count + 1), 0),
    [todos],
  );

  const addTodo = (title: string) => {
    setTodos((current) => [...current, createTodo(title)]);
  };

  const toggleTodo = (id: string) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <Card
        className="app__card"
        header={
          <CardHeader
            titleText="To-Do List"
            subtitleText="React + Vite + UI5 Web Components"
          />
        }
      >
        <AddTaskForm onAdd={addTodo} />

        <FilterBar filters={FILTERS} value={filter} onChange={setFilter} />

        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        <RemainingTasks count={remainingCount} />
      </Card>
    </div>
  );
}
