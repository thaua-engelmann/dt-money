import React, { useState } from "react";
import "./modalButtons.scss";

import incomesImg from "../../../assets/incomes.svg";
import outcomesImg from "../../../assets/outcomes.svg";

type ModalButtonsProps = {
  transactionType: string,
  setTransactionType: (type: string) => void,
}

const ModalButtons = ({transactionType, setTransactionType}: ModalButtonsProps) => {

  return (
    <div className="modal-buttons">
      <button
        type="button"
        className={transactionType === "income-type" ? "income-active" : ""}
        onClick={() => setTransactionType("income-type")}
      >
        <img src={incomesImg} alt="incomes" />
        Income
      </button>
      <button
        type="button"
        className={transactionType === "outcome-type" ? "outcome-active" : ""}
        onClick={() => setTransactionType("outcome-type")}
      >
        <img src={outcomesImg} alt="outcomes" />
        Outcome
      </button>
    </div>
  );
};

export default ModalButtons;
