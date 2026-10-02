import { Text } from "@ui5/webcomponents-react";

interface RemainingTasksProps {
  count: number;
}

export default function RemainingTasks({ count }: RemainingTasksProps) {
  return (
    <div className="remaining">
      <Text>
        {count} {count === 1 ? "task" : "tasks"} remaining
      </Text>
    </div>
  );
}
