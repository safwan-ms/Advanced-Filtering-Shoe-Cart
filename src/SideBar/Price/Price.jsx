import Input from "../../components/Input";
import React from "react";
const Price = ({ handleChange }) => {
  return (
    <div>
      <section>
        <h2 className="sidebar-title ">Price</h2>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </section>
    </div>
  );
};

export default Price;
