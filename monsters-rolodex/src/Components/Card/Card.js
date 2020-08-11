import React from "react";

import "./Card.css";

const Card = props => {
  const { robot } = props;
  const { name, email, id } = robot;

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
