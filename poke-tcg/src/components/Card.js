import React from "react";

const Card = ({ card }) => {
  console.log(card);
  console.log(card.imageURL);
  return (
    <div className="card">
      <h1>{card.name}</h1>
      <img src={card.imageUrl} alt={(card.id, card.name)} />
    </div>
  );
};

export default Card;
