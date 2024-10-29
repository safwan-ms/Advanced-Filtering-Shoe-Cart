import React from "react";
const Category = () => {
  return (
    <div>
      <h1 className="sidebar-title   ">Category</h1>
      <div className="flex flex-col">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container ">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sneaker
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Sandals
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  );
};

export default Category;
