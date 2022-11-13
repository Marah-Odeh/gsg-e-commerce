import React from "react";
import AddsBar from "../components/AddsBar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import ProductsListContainer from "../components/ProductsListContainer";
import Footer from "../components/Footer";

const ProductsList = () => {
  return (
    <div>
      <Slider />
      <ProductsListContainer />
    </div>
  );
};

export default ProductsList;
