import React from 'react';

import Card from '../Card';
import './style.css';

function ExpensesSummary() {
  return (
    <Card className="ExpensesSummary">
      <div className="ExpensesSummary__Quantity">
        <div className="ExpensesSummary__Quantity__Detail">
          <p>$12,095</p>
          <p className="ExpensesSummary__Quantity__Detail__Label">Income</p>
        </div>
        <div className="ExpensesSummary__Quantity__Detail ExpensesSummary__Quantity__Detail-boundary">
          <p>$33,363</p>
          <p className="ExpensesSummary__Quantity__Detail__Label">Outcome</p>
        </div>
        <div className="ExpensesSummary__Quantity__Detail">
          <p>$40000</p>
          <p className="ExpensesSummary__Quantity__Detail__Label">Total</p>
        </div>
      </div>
    </Card>
  );
}

export default ExpensesSummary
