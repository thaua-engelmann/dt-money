import { FormEvent, useEffect, useState } from "react";
import "./transactionModal.scss";
import { FaTimes } from "react-icons/fa";
import ModalButtons from "./modalButtons/ModalButtons";

import api from "../../services/api";

type ModalProps = {
  openTransactionModal: boolean;
  setOpenTransactionModal: (openModal: boolean) => void;
};

const TransactionModal = ({
  openTransactionModal,
  setOpenTransactionModal,
}: ModalProps) => {
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const [transactionCategory, setTransactionCategory] = useState("");

  const handleClickOutside = (e: any) => {
    if (e.target.classList.contains("modal")) {
      setOpenTransactionModal(false);
    }
  };

  useEffect(() => {
    const handleEnterEsc = (e: any) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setOpenTransactionModal(false);
      }
    };
    window.addEventListener("keydown", handleEnterEsc);
  });

  window.addEventListener("click", handleClickOutside);

  const handleSubmitTransaction = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      transactionName,
      transactionAmount,
      transactionType,
      transactionCategory,
    };

    api.post("/transactions", data);
  };

  return (
    <div className={`modal ${openTransactionModal ? "show" : ""}`}>
      <div className="modal-box">
        <div className="modal-box-content">
          <h3>Add a new transaction</h3>
          <form action="" onSubmit={handleSubmitTransaction}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={transactionName}
                onChange={(e) => setTransactionName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Amount"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(Number(e.target.value))}
              />
            </div>
            <div className="input-group">
              <ModalButtons
                transactionType={transactionType}
                setTransactionType={setTransactionType}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Category"
                value={transactionCategory}
                onChange={(e) => setTransactionCategory(e.target.value)}
              />
            </div>
            <div className="submit-btn">
              <button type="submit">Add +</button>
            </div>
          </form>
        </div>
        <button
          className="modal-box-close"
          onClick={() => setOpenTransactionModal(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default TransactionModal;
