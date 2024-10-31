import React from "react";
import Input from "../../components/Input";
const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="text" onChange={handleChange} value="white" name="test1" />
        <span className="checkmark gradient"></span>
        All
      </label>

      <Input
        onChange={handleChange}
        name="test1"
        value="black"
        title="Black"
        color="black"
      />
      <Input
        onChange={handleChange}
        name="test1"
        value="blue"
        title="Blue"
        color="blue"
      />
      <Input
        onChange={handleChange}
        name="test1"
        value="red"
        title="Red"
        color="red"
      />
      <Input
        onChange={handleChange}
        name="test1"
        value="green"
        title="Green"
        color="green"
      />

      <label className="sidebar-label-container">
        <input type="text" onChange={handleChange} value="white" name="test1" />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
