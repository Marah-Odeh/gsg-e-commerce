import React from "react";
import { BsQuestionSquare } from "react-icons/bs";
import styles from "./styles.module.css";
const AddToCartAndWishlist = () => {
  return (
    <div className={styles.AddToCartAndWishlist}>
      <button className={styles.AddToCartBtn}>Add to cart</button>
      <div  className={styles.Wishlist}>
      <BsQuestionSquare />
      <button className={styles.AddToWishlist}>Add to wishlist</button>
      </div>
    </div>
  );
};

export default AddToCartAndWishlist;
