import React, { useState, ChangeEvent } from 'react';

interface TextInputProps {
  value: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  validate?: (value: string) => boolean; // Typing validate as a function
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  disabled,
  validate, // Ensure validate is properly typed
  required,
  onChange,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const className = `form-control`;

  return (
    <div>
      {label && (
        <label htmlFor="textInput">
          {label}: {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        className={className}
        id="textInput"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />

      {required && validate && !value && (
        <div className="text-danger">Please enter {label}</div>
      )}

      {required && validate && value && !validate(value) && (
        <div className="text-danger">Invalid {label}</div>
      )}
    </div>
  );
};

export default TextInput;
