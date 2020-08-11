import React, { Fragment } from "react";

import Card from "../Card/Card";
import "./CardList.css";

const CardList = props => {
  const { robots } = props;
  return (
    <Fragment>
      {robots !== undefined && (
        <div className="card-list">
          {robots.map(robot => (
            <Card key={robot.id} robot={robot} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default CardList;
