import {
  SegmentedButton,
  SegmentedButtonItem,
} from "@ui5/webcomponents-react";

import type { TodoFilter } from "../types";

interface FilterBarProps {
  filters: readonly TodoFilter[];
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

export default function FilterBar({ filters, value, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <SegmentedButton itemsFitContent aria-label="Filter tasks">
        {filters.map((filter) => (
          <SegmentedButtonItem
            key={filter}
            selected={filter === value}
            onClick={() => onChange(filter)}
          >
            {filter}
          </SegmentedButtonItem>
        ))}
      </SegmentedButton>
    </div>
  );
}
