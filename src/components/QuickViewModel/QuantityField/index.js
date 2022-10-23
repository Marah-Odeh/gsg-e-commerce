import React from "react";
import QuantityCounter from "./QuantityCounter";
import AddToCartAndWishlist from "./AddToCartAndWishlist";
import styles from "./styles.module.css";

const QuantityField = () => {
  return (
    <div className={styles.QuantityField}>
      <p className={styles.QuantityTitle}>Quantity</p>
      <div className={styles.QuantityItems}>
        <QuantityCounter />
        <AddToCartAndWishlist />
      </div>
    </div>
  );
};

export default QuantityField;
