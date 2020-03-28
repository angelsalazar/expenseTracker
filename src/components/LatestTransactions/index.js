import React from 'react';

import Card from '../Card';
import MonthYearPicker from '../MonthYearPicker';
import Transaction from './Transaction';

import './style.css';

function LatestTransactions() {
  const [value, setValue] = React.useState(() => {
    const now = new Date();
    return {
      month: now.getMonth(),
      year: now.getFullYear()
    }
  });

  function handleChange(newVal) {
    setValue(newVal);
  }

  return (
    <Card className="LatestTransactions">
      <div className="LatestTransactions__Header">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <span>
          Transactions
        </span>
        <div className="LatestTransactions__Action">
          <MonthYearPicker
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="LatestTransactions__Content">
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    </Card>
  );
}

export default LatestTransactions;
