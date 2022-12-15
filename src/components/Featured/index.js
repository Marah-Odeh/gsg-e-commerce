import React from "react";
import ProductBox from "./ProductBox";
import { useProductsData } from "../../context/ProductsDataContext";

const Featured = () => {
  const { products } = useProductsData();

  return <ProductBox products={products.slice(0, 8)} />;
};

export default Featured;
