// Button.js
import React from 'react';
type Props = {
    color: string,
    textColor: string,
    onClick: () => void,
    label: string,
    id: string,
    disabled?: boolean
}
const Button = ({ color, textColor, onClick, label, id, disabled }: Props) => {
    const className = `btn text-${textColor} btn-${color} g-0`

    return (
        <div>
            <input type="submit" className={className} onClick={onClick} id={id} name={id} value={label} disabled={disabled} readOnly />
        </div>
    );
};

export default Button;
