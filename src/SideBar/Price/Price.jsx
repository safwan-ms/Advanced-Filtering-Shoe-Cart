import Input from "../../components/Input";
import React from "react";
const Price = ({ handleChange }) => {
  return (
    <div>
      <section>
        <h2 className="sidebar-title">Price</h2>

        <Input />
        <Input />
        <Input />
        <Input />
      </section>
    </div>
  );
};

export default Price;
