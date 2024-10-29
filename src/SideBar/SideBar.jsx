import React from "react";
import Colors from "./Colors/Colors";
import Category from "./Category/Category";
import Price from "./Price/Price";
import { LiaOpencart } from "react-icons/lia";
const SideBar = () => {
  return (
    <section className="sidebar-body pt-28 sm:pt-6 pl-5 h-[100%] fixed ">
      <div>
        <LiaOpencart className="text-5xl" />
      </div>
      <Category />
      <Price />
      <Colors />
    </section>
  );
};

export default SideBar;
