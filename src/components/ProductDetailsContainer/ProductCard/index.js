import React from "react";
import styles from "./styles.module.css";

const ProductCard = ({ containerName, productImage, productDescription }) => {
  return (
    <div
      className={styles.ProductCard}
      id={containerName === "fabric" && styles.fabricCard}
    >
      <img src={productImage}  alt="product"   id={containerName === "fabric" && styles.fabricCardImg} />
      <div className={styles.productDescription}>{productDescription}</div>
    </div>
  );
};

export default ProductCard;
