import React from "react";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <div
      onClick={onClickHandler}
      value={value}
      className="btn btn-outline sm:btn-sm glass md:btn-md mb-3 text-white mr-4"
    >
      {title}
    </div>
  );
};

export default Buttons;
