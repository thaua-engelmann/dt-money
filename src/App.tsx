import React, { useState } from 'react';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import TransactionModal from "./components/transactionModal/TransactionModal";

// Context;
import TransactionProvider from './context/TransactionsContext';

import './App.scss';

function App() {

  const [openTransactionModal, setOpenTransactionModal] = useState(false);

  return (
    <TransactionProvider>
      <Header setOpenTransactionModal={setOpenTransactionModal} />
      <Dashboard />
      <TransactionModal openTransactionModal={openTransactionModal} setOpenTransactionModal={setOpenTransactionModal} />
    </TransactionProvider>
  );
}

export default App;
