import React from "react";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import Price from "./Price/Price";
import { LiaOpencart } from "react-icons/lia";

const SideBar = ({ handleChange }) => {
  return (
    <section className="fixed z-10 h-full pt-2 bg-white border-r sidebar-body ">
      <div>
        <div className="flex items-center justify-center py-1">
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
