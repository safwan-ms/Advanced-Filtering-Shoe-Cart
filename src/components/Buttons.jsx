import React from "react";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="recommended-btns">
      {title}
    </button>
  );
};

export default Buttons;
