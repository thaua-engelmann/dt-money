import React, { useContext } from "react";
import "./transactionTable.scss";
import trashImg from "../../assets/trash.gif";

// Context;
import { TransactionsContext } from "../../context/TransactionsContext";

const TransactionTable = () => {

  const handleDeleteTransaction = (e: any) => {
    e.target.parentElement.parentElement.classList.add('deleted');

    setTimeout(() => {
      e.target.parentElement.parentElement.style.display = "none";
    }, 1500)
  }

  const formatDate = (date: string | Date) => {
    const dateTime = new Date(date);
    const day = String(dateTime.getDate()).padStart(2, '0');
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const year = dateTime.getFullYear();

    return `${day}/${month}/${year}`;
  }

  const {transactions} = useContext(TransactionsContext);

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
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              {/* <td>{transaction.category === "" ? "none" : transaction.category}</td> */}
              <td>{transaction.category || "none"}</td>
              <td>
                {
                  formatDate(transaction.createdAt)
                }
              </td>
              <td className="delete-transaction">
                <img src={trashImg} alt="delete transaction icon" onClick={handleDeleteTransaction} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
