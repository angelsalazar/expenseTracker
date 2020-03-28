import React from 'react';

import './transactionStyle.css';

function Transaction() {
  return (
    <div className="Transaction">
      <p className="Transaction__Category">
        Rent
      </p>
      <div className="Transaction__Metadata">
        <span className="Transaction__Date">4 Aug 2020</span>
        <span className="Transaction__Quantiy Transaction__Quantiy-outcome">$340</span>
      </div>
    </div>
  );
}

export default Transaction;
