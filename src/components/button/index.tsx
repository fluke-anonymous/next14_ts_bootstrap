// Button.tsx

import React, { FC } from 'react';

// Define the props interface
interface ButtonProps {
  label: string;
  onClick?: () => void; // Optional onClick function
  disabled?: boolean; // Optional disabled state
  color: string;
  textColor: string;
}

// Define the Button component
const Button: FC<ButtonProps> = ({color,textColor, label, onClick, disabled }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const className = `btn btn-${color} text-${textColor}`;
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
