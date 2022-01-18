import { createContext, useEffect, useReducer } from "react";
import { transactionReducer } from "../reducers/transactionReducer";

type Transaction = {
  id: number;
  name: string;
  amount: number;
  type: string;
  category: string;
  date: string;
};

type TransactionInput = Omit<Transaction, "id">;

type TransactionProviderProps = {
  children: any; // ReactNode
};

type TransactionContextProps = {
  transactions: Transaction[];
  dispatch: any;
};

export const TransactionsContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, dispatch] = useReducer(transactionReducer, [], () => {
    const localData = localStorage.getItem("transactions");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        dispatch
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionProvider;
