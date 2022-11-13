import React from "react";
import ProductBox from "./ProductBox";
import { data } from "../Shared/ProductDetails";

const Featured = () => {
  const { products } = data;

  return <ProductBox products={products} />;
};

export default Featured;
