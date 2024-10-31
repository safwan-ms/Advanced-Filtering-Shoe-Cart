import React from "react";
import Input from "../../components/Input";

const Category = () => {
  // Added selectedCategory prop
  return (
    <div>
      <h1 className="sidebar-title">Category</h1>
      <div className="flex flex-col">
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Category;
