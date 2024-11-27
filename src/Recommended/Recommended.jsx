import React from "react";
import Buttons from "../components/Buttons";
const Recommended = ({ handleClick }) => {
  return (
    <div className=" recommended">
      <h1 className="recommended-title ">Recommended</h1>
      <div className="flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recommended;
