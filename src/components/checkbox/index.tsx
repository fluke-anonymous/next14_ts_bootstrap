// Checkbox.tsx

import React, { FC } from 'react';

// Define the props interface
interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// Define the Checkbox component
const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default Checkbox;
