import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoBagCheck } from "react-icons/io5";
import products from "../db/data";
const Card = () => {
  return products.map(({ img, title, reviews, prevPrice, newPrice }) => {
    <div className="card ">
      {/*  Image */}
      <div className="card-image">
        <img src={img} alt={title} className=" pt-10" />
      </div>
      {/*  Title */}
      <div className="pl-8 sm:p-0">
        <h3 className="card-title">{title}</h3>
        {/* Rating Stars */}
        <p className="flex pt-3">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500 " />
        </p>
        {/* Review */}
        <p className="pt-2 text-xs">{reviews}</p>

        {/* Price Section*/}
        <div className="flex justify-evenly w-auto ">
          <p className="mr-2">
            {newPrice}
            <span className="line-through text-xs"> {prev}</span>
          </p>
          {/* BagIcon */}
          <IoBagCheck className="mt-1" />
        </div>
      </div>
    </div>;
  });
};

export default Card;
