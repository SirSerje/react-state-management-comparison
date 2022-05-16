import React, { ChangeEventHandler } from "react";

export const Checkbox: React.FC<{
  label: string;
  value: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}> = ({ onChange, value, label }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};
