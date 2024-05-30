// components/RadioGroup.tsx
import React, { useEffect, useState } from 'react';
import RadioButton from '@/components/radio';

interface RadioGroupProps {
    name: string;
    options: { value: string; label: string }[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, defaultValue, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue || '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    useEffect(() => {
        if (defaultValue !== undefined) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    return (
        <div className='d-flex form-check'>
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    name={name}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={handleChange}
                    label={option.label}
                />
            ))}
        </div>
    );
};

export default RadioGroup;
