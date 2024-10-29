import React from "react";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import Price from "./Price/Price";
import { LiaOpencart } from "react-icons/lia";

const SideBar = () => {
  return (
    <section className="sidebar-body pt-6 h-full z-10 border-r bg-white fixed ">
      <div className="flex justify-center items-center py-4">
        <LiaOpencart className="text-5xl" />
      </div>

      <div className="px-4 ">
        <Category />
        <Price />
        <Colors />
      </div>
    </section>
  );
};

export default SideBar;
