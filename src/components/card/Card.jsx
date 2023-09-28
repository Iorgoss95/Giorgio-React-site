import React from "react";
import Button from "../buttons/Button";

import classNames from "classnames";

import "./card.scss";

const Card = ({ title, className, black, glass, size }) => {
  const classList = classNames(
    "card",
    className,
    { glass },
    { black },
    { [`${size}`]: size }
  );

  return (
    <section id={title} className={classList}>
      <p className="title">{title}</p>
      <div className="card-button">
        <Button text="Click me" />
      </div>
    </section>
  );
};

export default Card;
