// components/SingleSelectSearch.tsx

import React from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";

type Props = {
  label: string;
  value: string;
  options: { [key: string]: string }[];
  optionLabel: string;
  optionValue: string;
  required?: boolean;
  validated: () => any; // Adjust the return type as per your validation function
  disabled?: boolean;
  onChange?: (value: string) => void; // Define onChange prop
};

const SelectSearch: React.FC<Props> = ({
  label,
  value,
  options,
  optionLabel,
  optionValue,
  required,
  validated,
  disabled,
  onChange,
}: Props) => {
  const antdOptions: SelectProps["options"] = options.map((opt) => ({
    value: opt[optionValue],
    label: opt[optionLabel],
  }));

  const handleChange = (selectedValue: string) => {
    console.log(`selected ${selectedValue}`);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div>
      {label && (
        <label htmlFor="textInput">
          {label}: {required && <span className="text-danger">*</span>}
        </label>
      )}
      <Select
        style={{ width: "100%" }}
        value={value}
        onChange={handleChange}
        options={antdOptions}
        disabled={disabled}
        required={required}
      />
      {required && validated && !value && (
        <div className="text-danger">Please enter {label}</div>
      )}

      {required && validated && value && !validated(value) && (
        <div className="text-danger">Invalid {label}</div>
      )}
    </div>
  );
};

export default SelectSearch;
