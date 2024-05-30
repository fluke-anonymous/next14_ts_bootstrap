import React, { useState, ChangeEvent } from 'react';

interface TextInputProps {
    value: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder,disabled, onChange }) => {
    const [value, setValue] = useState<string>(''); // Initial state with type

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue); // Call the external onChange handler if provided
        }
    };

    const className = `form-control`

    return (
        <div>
            {label && <label htmlFor="textInput">{label}: </label>}
            <input
                className={className}
                id="textInput"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
};

export default TextInput;
