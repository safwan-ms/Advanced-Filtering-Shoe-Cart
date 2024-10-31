import React from "react";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import Price from "./Price/Price";
import { LiaOpencart } from "react-icons/lia";

const SideBar = ({ handleChange }) => {
  return (
    <section className="sidebar-body pt-2 h-full z-10 border-r bg-white fixed ">
      <div>
        <div className="flex justify-center items-center py-1">
          <LiaOpencart className="text-5xl" />
        </div>

        <div className="px-4 ">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
