import React from "react";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import Price from "./Price/Price";
import { LiaOpencart } from "react-icons/lia";
const SideBar = () => {
  return (
    <section className="sidebar-body pt-28 sm:pt-6 h-[100%] z-10 border border-r-2 sm:z-20 bg-[#fff] fixed ">
      <div className="flex justify-center align-center">
        <LiaOpencart className="text-5xl " />
      </div>

      <div>
        <Category />
        <Price />
        <Colors />
      </div>
    </section>
  );
};

export default SideBar;
