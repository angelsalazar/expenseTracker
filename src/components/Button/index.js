import React from 'react';
import clsx from 'clsx';

import './style.css';

function Button({ className, children, ...props }) {
  return (
    <button
      className={clsx('Button', className)}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
