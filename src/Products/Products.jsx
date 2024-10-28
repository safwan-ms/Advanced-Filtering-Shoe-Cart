import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoBagCheck } from "react-icons/io5";
const Products = () => {
  return (
    // Card
    <section className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-col-1 w-[80%] ml-auto">
      <div className="sm:w-[250px] md:w-[200px] flex sm:block  border border-2 p-5 mr-2 mt-2">
        {/*  Image */}
        <div className="w-[180px]">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Nike Air Monarch IV"
            className="w-[160px] pt-5"
          />
        </div>
        {/*  Title */}
        <div className="pl-8 sm:p-0">
          <h3 className="font-bold pt-3">Nike Air Monarch IV</h3>
          {/* Rating Stars */}
          <p className="flex pt-3">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500 " />
          </p>
          {/* Review */}
          <p className="pt-2 text-xs">Reviews: (123 reviews)</p>

          {/* Price Section*/}
          <div className="flex justify-evenly w-auto ">
            <p className="mr-2">
              ₹4100 <span className="line-through text-xs">₹5900</span>
            </p>
            {/* BagIcon */}
            <IoBagCheck className="mt-1" />
          </div>
        </div>
      </div>

      {/* break */}
    </section>
  );
};

export default Products;
