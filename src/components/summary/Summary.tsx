import React from 'react'
import "./summary.scss";

import incomesImg from "../../assets/incomes.svg";
import outcomesImg from "../../assets/outcomes.svg";
import totalImg from "../../assets/total.svg";
import Card from "../card/Card";

const Summary = () => {

    const cardDetails = [
        {
            title: "Incomes",
            image: {
                src: incomesImg,
                alt: "incomes"
            },
            amount: 1700
        },
        {
            title: "Outcomes",
            image: {
                src: outcomesImg,
                alt: "outcomes"
            },
            amount: 250,
        },
        {
            title: "Total",
            image: {
                src: totalImg,
                alt: "total"
            },
            amount: 1450
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
