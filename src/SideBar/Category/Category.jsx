import React from "react";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  // Added selectedCategory prop
  return (
    <div>
      <h1 className="sidebar-title">Category</h1>
      <div className="flex flex-col">
        <label className="text-xs sm:text-sm sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className=" checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
