import { FormEvent, useEffect, useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import ModalButtons from "./modalButtons/ModalButtons";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";

import { TransactionsContext } from "../../context/TransactionsContext";

import "./transactionModal.scss";

type ModalProps = {
  openTransactionModal: boolean;
  setOpenTransactionModal: (openModal: boolean) => void;
};

const TransactionModal = ({
  openTransactionModal,
  setOpenTransactionModal,
}: ModalProps) => {
  const today = new Date().toLocaleString().slice(0, 10);

  const { createTransaction } = useContext(TransactionsContext);

  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("income-type");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

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

  const handleSubmitTransaction = async (e: FormEvent) => {
    e.preventDefault();

    await createTransaction({
      name: transactionName,
      amount: transactionAmount,
      type: transactionType,
      category: transactionCategory,
      createdAt: transactionDate,
    });

    // Reset form values;
    setTransactionName("");
    setTransactionAmount(0);
    setTransactionType("income-type");
    setTransactionCategory("");
    setTransactionDate("");

    // Close modal just if the transaction was successfully created;
    setOpenTransactionModal(false);
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
                required
              />
            </div>
            <div className="input-group">
              <NumberFormat
                thousandSeparator
                prefix="R$ "
                placeholder="R$ 0,00"
                isNumericString
                value={transactionAmount}
                onValueChange={(values: any) => {
                  const { value } = values;
                  setTransactionAmount(Number(value));
                }}
                required
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
            <div className="input-group">
              <InputMask
                mask="99/99/9999"
                placeholder={today}
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
                required
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
