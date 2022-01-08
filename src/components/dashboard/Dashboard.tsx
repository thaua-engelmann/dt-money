import React from 'react'
import "./dashboard.scss";

import Summary from '../summary/Summary';
import TransactionTable from "../transactionTable/TransactionTable";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Summary />
            <TransactionTable />
        </div>
    )
}

export default Dashboard;
