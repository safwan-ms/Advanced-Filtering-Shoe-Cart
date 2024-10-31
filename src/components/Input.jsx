import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <div>
      <label className="sidebar-label-container text-[11px] sm:text-base">
        <input onChange={handleChange} value={value} name={name} type="radio" />
        <span style={{ backgroundColor: color }} className="checkmark"></span>
        {title}
      </label>
    </div>
  );
};

export default Input;
