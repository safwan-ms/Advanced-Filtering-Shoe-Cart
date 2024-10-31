import React from "react";

import Card from "../components/Card";
const Products = ({ result }) => {
  return (
    // Card
    <section className="product-body">
      {/* <Card result={result} /> */}
      {result}
    </section>
  );
};

export default Products;
