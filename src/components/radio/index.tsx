// components/RadioButton.tsx
import React from 'react';

interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange, label }) => {
    return (
        <div className='d-flex g-0'>
            <input
                className='form-check-input m-1'
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label className='form-check-label mt-1'>{label}</label>

        </div>
    );
};

export default RadioButton;
