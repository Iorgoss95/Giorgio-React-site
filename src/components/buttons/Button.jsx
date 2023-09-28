import React from "react";

import "./button.scss";

const Button = ({ onClick, text, icon, disabled }) => {
  return (
    <div className="button" onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
