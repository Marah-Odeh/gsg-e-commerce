import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const ProductDetailsButton = ({ productId }) => {
  return (
    <Link
      className={styles.ProductDetailsButton}
      to={`/productDetails/${productId}`}
    >
      View Full product Details{" "}
    </Link>
  );
};

export default ProductDetailsButton;
