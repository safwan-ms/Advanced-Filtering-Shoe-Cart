import React from "react";
import Input from "../../components/Input";

const Category = ({ handleChange, selectedCategory }) => {
  // Added selectedCategory prop
  return (
    <div>
      <h1 className="sidebar-title">Category</h1>
      <div className="flex flex-col">
        <Input
          onChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="category" // Changed name to be consistent for radio buttons
          checked={selectedCategory === "sneakers"} // Checked based on selectedCategory
        />
        <Input
          onChange={handleChange}
          value="flats"
          title="Flats"
          name="category"
          checked={selectedCategory === "flats"}
        />
        <Input
          onChange={handleChange}
          value="sandals"
          title="Sandals"
          name="category"
          checked={selectedCategory === "sandals"}
        />
        <Input
          onChange={handleChange}
          value="heels"
          title="Heels"
          name="category"
          checked={selectedCategory === "heels"}
        />
      </div>
    </div>
  );
};

export default Category;
