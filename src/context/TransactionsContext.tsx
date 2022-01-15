import { createContext, useEffect, useState } from "react";
import api from "../services/api";

type Transaction = {
  id: number;
  name: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionInput = Omit<Transaction, "id">;

type TransactionProviderProps = {
  children: any; // ReactNode
};

type TransactionContextProps = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post("/transactions", transactionInput);
    const { transaction } = response.data // const transaction = response.data.transaction;

    setTransactions([
      ...transactions,
      transaction
    ])
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionProvider;
