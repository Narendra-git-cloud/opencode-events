# To-Do List

A small to-do list built with **React 19**, **Vite**, **TypeScript** and
**[UI5 Web Components for React](https://ui5.github.io/webcomponents-react/)**
(`@ui5/webcomponents-react`). There is no backend — all state lives in memory and
the app starts from a set of sample tasks.

## Features

- **Add** a task from the input field (or press <kbd>Enter</kbd>)
- **Complete** a task with its checkbox
- **Delete** a task with the trash icon on the right
- **Filter** the list by `All` / `Active` / `Completed`
- **Remaining-tasks counter** below the list

## Getting started

```bash
npm install
npm run dev
```

Vite prints the local URL (by default <http://localhost:5173>).

## Available scripts

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload    |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`   |
| `npm run preview` | Serve the production build from `dist/`      |

## Project structure

```
src/
├── App.tsx                      # state + orchestration (add / toggle / delete / filter)
├── main.tsx                     # React entry point
├── types.ts                     # Todo and TodoFilter types
├── icons.ts                     # registers the SAP icon sets used by the app
├── styles.css                   # page-level layout and styling
├── data/
│   └── mockTodos.ts             # the 6 sample tasks used as initial state
└── components/
    ├── AddTaskForm.tsx          # input + "Add" button
    ├── FilterBar.tsx            # SegmentedButton with the three filters
    ├── TodoList.tsx             # UI5 List, empty-state text
    ├── TodoItem.tsx             # ListItemStandard with checkbox + delete button
    └── RemainingTasks.tsx       # remaining-tasks counter
```

## Notes

- Tasks are seeded from [`src/data/mockTodos.ts`](src/data/mockTodos.ts); the
  state resets on reload because nothing is persisted.
- Only the `add` and `delete` icons from the `SAP-icons-v4` collection are
  registered, so the bundle does not pull in the full icon set.
- The counter always reflects *all* tasks, not just the ones the current filter
  is showing.

## Tech stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [TypeScript](https://www.typescriptlang.org) 5
- [@ui5/webcomponents-react](https://ui5.github.io/webcomponents-react/) 2
