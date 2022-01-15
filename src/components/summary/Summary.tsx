import React, { useContext } from 'react'
import "./summary.scss";

import incomesImg from "../../assets/incomes.svg";
import outcomesImg from "../../assets/outcomes.svg";
import totalImg from "../../assets/total.svg";
import Card from "../card/Card";

import { TransactionsContext } from '../../context/TransactionsContext';

const Summary = () => {

    const { transactions } = useContext(TransactionsContext);

    const summaryNumbers = transactions.reduce((accumulator, transaction) => {
        if (transaction.type === "income-type") {
            accumulator.incomes += transaction.amount;
            accumulator.total += transaction.amount;
        } else {
            accumulator.outcomes += transaction.amount;
            accumulator.total -= transaction.amount;    
        }

        return accumulator;
    }, {
        incomes: 0,
        outcomes: 0,
        total: 0,
    })

    const cardDetails = [
        {
            title: "Incomes",
            image: {
                src: incomesImg,
                alt: "incomes"
            },
            amount: summaryNumbers.incomes,
        },
        {
            title: "Outcomes",
            image: {
                src: outcomesImg,
                alt: "outcomes"
            },
            amount: summaryNumbers.outcomes,
        },
        {
            title: "Total",
            image: {
                src: totalImg,
                alt: "total"
            },
            amount: summaryNumbers.total
        }
    ]

    return (
        <div className="summary">
           {cardDetails.map(card => (
               <Card card={card} key={card.title} />
           ))}
        </div>
    )
}

export default Summary;
