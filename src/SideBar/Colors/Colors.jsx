import React from "react";
import Input from "../../components/Input";
const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>

      {/* <label className="sidebar-label-container">
        <input type="text" onChange={handleChange} value="white" name="test1" />
        <span className="checkmark gradient"></span>
        All
      </label> */}

      <Input />
      <Input />
      <Input />
      <Input />

      {/* <label className="sidebar-label-container">
        <input type="text" onChange={handleChange} value="white" name="test1" />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>
        White
      </label> */}
    </div>
  );
};

export default Colors;
