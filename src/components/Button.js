import React from "react";

function Button() {
  // Button component
  // eslint-disable-next-line
  const Button = ({ onClick, title }) => {
    return (
      <button className="button" id="new-quote" onClick={onClick}>
        {title}
      </button>
    );
  };
}
export default Button;
