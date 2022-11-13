import React from "react";
// import ProductCard from "../../ProductCard";
import styles from "./styles.module.css";
// import { AllProducts } from "./AllProducts";
import ProductsBox from"../../Featured/ProductBox"
const ProductsContainer = ({products}) => {
  return (
    <div className={styles.ProductsContainer}>

        <ProductsBox products={products} />
     
    </div>
  );
};

export default ProductsContainer;
