import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const ProductDetailsButton = ({ productId, openModal, SetIsHovering }) => {
  const handleProductDetailsButton = () => {
    openModal(false);
    SetIsHovering(-1);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Link
        to={`/productDetails/${productId}`}
        className={styles.ProductDetailsButton}
        onClick={handleProductDetailsButton}
      >
        View Full product Details
      </Link>
    </>
  );
};

export default ProductDetailsButton;
