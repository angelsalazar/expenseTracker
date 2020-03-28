import React from 'react';
import {
  FundsOverview,
  ExpensesSummary,
  LatestTransactions
} from '../../components';

import './style.css';
// https://dribbble.com/shots/7705222-Hubio-Financial-Wallet-Web-Application-Design
// https://dribbble.com/shots/10175714-Invoicer-Dashboard
// https://dribbble.com/shots/9444154-Verification-after-scanning
// https://www.behance.net/gallery/87608883/Hubio-Web-Application-Financial-Budget-Planner
function Home() {
  return (
    <div className="Home">
      <ExpensesSummary />
      <div className="Home__Details">
        <div className="Home__Details__Graph">
          <FundsOverview />
        </div>
        <LatestTransactions />
      </div>
    </div>
  );
}


export default Home;
