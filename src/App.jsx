import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from " ./SideBar/SideBar";

// Data
import products from "./db/data";

// Input Filter
const [query, setQuery] = useState("");

const handleInput = (event) => {
  setQuery(event.target.value);
};

const filteredItem = products.filter((product) =>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
);

const App = () => {
  return (
    <>
      <SideBar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
