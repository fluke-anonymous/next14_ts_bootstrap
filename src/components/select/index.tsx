import React, { ChangeEvent, useEffect, useState } from 'react';
import { Option } from '@/interface/app'

interface SelectProps {
    options: Option[];
    value?: any;
    onChange: (value: any) => void;
    disabled?: boolean
}

const Select: React.FC<SelectProps> = ({ options, value, disabled, onChange }) => {
    const [Ioptions, setIoptions] = useState<Option[]>([]);
    const [Ivalue, setIvalue] = useState<any>(value || '');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue = event.target.value;
        setIvalue(newValue);
        onChange(newValue);
    };

    useEffect(() => {
        setIoptions(options);
        setIvalue(value);
    }, [options, value]);

    return (
        <select className='form-control' value={Ivalue} onChange={handleChange} disabled={disabled}>
            <option value=''>
                {''}
            </option>
            {Ioptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
