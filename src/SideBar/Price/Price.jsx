import Input from "../../components/Input";
import React from "react";
const Price = ({ handleChange }) => {
  return (
    <div>
      <section>
        <h2 className="sidebar-title">Price</h2>

        <Input
          onChange={handleChange}
          value={1499}
          title="₹500 - ₹1499"
          name="test2"
        />
        <Input
          onChange={handleChange}
          value={2999}
          title="₹1500 - ₹2999"
          name="test2"
        />
        <Input
          onChange={handleChange}
          value={3000}
          title="₹3000 - ₹6999"
          name="test2"
        />
        <Input
          onChange={handleChange}
          value={10000}
          title="₹7000 and above"
          name="test2"
        />
      </section>
    </div>
  );
};

export default Price;
