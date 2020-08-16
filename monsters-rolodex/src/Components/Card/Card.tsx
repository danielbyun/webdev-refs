import React from "react";

import "./Card.css";

interface CardStatelessProps {
  robot: {
    name: string;
    email: string;
    id: number;
  };
}

const Card: React.SFC<CardStatelessProps> = ({
  robot: { name, email, id },
}) => {
  return (
    <div className="card-container">
      <img
        alt="robot"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2> {name} </h2>
      <p> {email} </p>
    </div>
  );
};

export default Card;
