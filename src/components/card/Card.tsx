import React from "react";
import "./card.scss";

type CardProps = {
  card: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
    amount: number;
  };
};

const Card = ({ card }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          <p>{card.title}</p>
        </div>
        <div className="card-header-icon">
          <img src={card.image.src} alt={card.image.alt} />
        </div>
      </div>
      <h1 className="card-amount">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(card.amount)}
      </h1>
    </div>
  );
};

export default Card;
