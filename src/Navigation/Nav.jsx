import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserPlus } from "react-icons/fa6";
const Nav = () => {
  return (
    <div className="py-6 border-b-2 flex justify-between px-60">
      <div>
        <input
          type="text"
          placeholder="Enter Your Search..."
          className="bg-gray-100 p-2 pr-5 focus:outline-none"
        />
      </div>
      <div className="flex pt-3 ">
        <FaRegHeart className="mr-4" />
        <TiShoppingCart className="mr-4" />
        <FaUserPlus className="mr-4" />
      </div>
    </div>
  );
};

export default Nav;
