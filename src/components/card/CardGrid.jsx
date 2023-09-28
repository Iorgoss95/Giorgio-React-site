import React from "react";
import classNames from "classnames";
import Card from "./Card";

import "./card.scss";

const Grid = ({ className, children }) => {
  const classList = classNames("card-grid", className);

  return <div className={classList}>{children}</div>;
};

const CardGrid = Object.assign(Grid, {
  Card: Card,
});

export default CardGrid;
