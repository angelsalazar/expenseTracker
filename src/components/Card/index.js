import React from 'react';
import clsx from 'clsx';

import './style.css';

function Card({ className, children }) {
  return (
    <div className={clsx('Card', className)}>
      {children}
    </div>
  )
}

export default Card;
