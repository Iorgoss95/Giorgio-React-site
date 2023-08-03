import React from "react";

import "./button.scss";

const Button = ({ text, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
