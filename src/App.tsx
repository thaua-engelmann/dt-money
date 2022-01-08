import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import TransactionModal from "./components/transactionModal/TransactionModal";

function App() {

  const [openTransactionModal, setOpenTransactionModal] = useState(false);

  return (
    <div className="App">
      <Header setOpenTransactionModal={setOpenTransactionModal} />
      <Dashboard />
      <TransactionModal openTransactionModal={openTransactionModal} setOpenTransactionModal={setOpenTransactionModal} />
    </div>
  );
}

export default App;
