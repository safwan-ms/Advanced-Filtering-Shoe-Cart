import React from "react";
import Buttons from "../components/Buttons";
const Recommended = ({ handleClick }) => {
  return (
    <div className=" recommended">
      <h1 className="recommended-title ">Recommended</h1>
      <div className="flex">
        <Buttons
          onClick={handleClick}
          value="All Products"
          title="All Products"
        />
        <Buttons onClick={handleClick} value="Nike" title="Nike" />
        <Buttons onClick={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClick={handleClick} value="Puma" title="Puma" />
        <Buttons onClick={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recommended;
