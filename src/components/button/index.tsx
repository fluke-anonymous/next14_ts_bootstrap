import React from 'react';
import { Button } from 'antd';

type Props = {
    varaint: 'outline'|'contain';
  icon: React.ReactNode;
  color: string;
  textColor: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const ButtonComponent: React.FC<Props> = ({ icon, color, textColor, label, disabled, onClick }) => {
  return (
    <Button
      style={{ backgroundColor: color, color: textColor, padding: "2px" ,margin: '2px' }}
      icon={icon}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
