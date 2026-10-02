import { useState } from "react";
import { Button, Input } from "@ui5/webcomponents-react";

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [draft, setDraft] = useState("");

  const submit = () => {
    const title = draft.trim();

    if (!title) {
      return;
    }

    onAdd(title);
    setDraft("");
  };

  return (
    <div className="add-task">
      <Input
        className="add-task__input"
        value={draft}
        placeholder="What needs to be done?"
        accessibleName="New task title"
        onInput={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            submit();
          }
        }}
      />
      <Button
        className="add-task__button"
        design="Emphasized"
        icon="SAP-icons-v4/add"
        onClick={submit}
      >
        Add
      </Button>
    </div>
  );
}
