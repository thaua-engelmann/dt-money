import React, { useContext } from "react";
import "./transactionTable.scss";
import trashImg from "../../assets/trash.gif";

// Context;
import { TransactionsContext } from "../../context/TransactionsContext";

// Utils;
import { formatMoney, formatDate } from "../../utils";

const TransactionTable = () => {
  const { transactions, dispatch } = useContext(TransactionsContext);

  const handleDeleteTransaction = (id: number) => {
    dispatch({type: "REMOVE_TRANSACTION", id})
  };

  return (
    <div className="transactions">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th className="delete">Delete</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.name}</td>
              <td className={transaction.type}>
                {formatMoney(transaction.amount)}
              </td>
              {/* <td>{transaction.category === "" ? "none" : transaction.category}</td> */}
              <td>{transaction.category || "none"}</td>
              <td>{formatDate(transaction.date)}</td>
              <td className="delete-transaction">
                <img
                  src={trashImg}
                  alt="delete transaction icon"
                  onClick={() => handleDeleteTransaction(transaction.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
