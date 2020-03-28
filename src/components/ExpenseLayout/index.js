import React from 'react';
import { Outlet } from 'react-router-dom';

import './style.css';

function ExpenseLayout() {
  return (
    <div>
      <div>ExpenseLayout</div>
      <Outlet />
    </div>
  )
}

export default ExpenseLayout;
