import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoBagCheck } from "react-icons/io5";
const Products = () => {
  return (
    <div className="grid">
      <div className="w-[250px]  border border-2">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Nike Air Monarch IV"
          className="w-[250px] pt-5"
        />
        <h3 className="font-bold pt-3">Nike Air Monarch IV</h3>
        <p className="flex pt-3">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500 " />
        </p>
        <p className="pt-2">Reviews: (123 reviews)</p>
        <div className="flex justify-evenly">
          <p className="mr-2">
            ₹4100 <del>₹5900</del>
          </p>

          <IoBagCheck className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Products;
