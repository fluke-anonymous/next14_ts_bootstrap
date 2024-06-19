import React from "react";
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

type Props = {
  label: string;
  value: string[];
  options: { [key: string]: string }[];
  optionLabel?: string;
  optionValue?: string;
  required?: boolean;
  validated?:  (value: string) => boolean;  // Adjust the return type as per your validation function
  disabled?: boolean;
  onChange?: (value: string[]) => void;  // Define onChange prop
};

const MultiSelectSearch: React.FC<Props> = ({
  label,
  value,
  options,
  optionLabel = 'name',
  optionValue = 'code',
  required,
  validated,
  disabled,
  onChange,  // Destructure onChange prop
}: Props) => {
  const antdOptions: SelectProps['options'] = options.map(opt => ({
    value: opt[optionValue],
    label: opt[optionLabel],
  }));

  const handleChange = (selectedValues: string[]) => {
    console.log(`selected ${selectedValues}`);
    if (onChange) {
      onChange(selectedValues);  // Call onChange prop if provided
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
        mode="tags"
        style={{ width: '100%' }}
        value={value}  // Ensure value is an array
        onChange={(value)=>handleChange(value)}
        tokenSeparators={[',']}
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

export default MultiSelectSearch;
