import React from "react";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <div onClick={onClickHandler} value={value} className="recommended-btns">
      {title}
    </div>
  );
};

export default Buttons;
