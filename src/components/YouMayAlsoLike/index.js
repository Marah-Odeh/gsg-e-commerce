import React from "react";
import ProductBox from "../Featured/ProductBox";
import { useProductsData } from "../../context/ProductsDataContext";

const YouMayAlsoLike = () => {
  const { products } = useProductsData();

  return <ProductBox products={products.slice(0,4)} />;
};

export default YouMayAlsoLike;
