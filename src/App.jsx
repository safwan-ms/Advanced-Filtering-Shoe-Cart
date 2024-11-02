import React, { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredInput = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  function filteredData(products, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredInput;
    }
    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => {
        <Card
          key={Math.random()}
          img={img}
          title={title}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />;
      }
    );
  }
  const result = filteredData(products, query);
  return (
    <>
      <Sidebar />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended />
      <Products result={result} />
    </>
  );
}

export default App;
