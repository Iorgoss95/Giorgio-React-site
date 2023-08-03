import React from "react";
import Button from "../buttons/Button";

import "./card.scss";

const Card = ({ title }) => {
  return (
    <section className="card">
      <p className="title">{title}</p>
      <div className="card-button">
        <Button text="Click me" />
      </div>
    </section>
  );
};

export default Card;
