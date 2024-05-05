import React from 'react';

import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`rounded-lg px-4 py-1 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
