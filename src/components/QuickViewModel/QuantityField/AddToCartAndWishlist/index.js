import React from "react";
import { BsQuestionSquare } from "react-icons/bs";
import styles from "./styles.module.css";
const AddToCartAndWishlist = ({ increaseCartQuantity,id }) => {
 
  return (
    <div className={styles.AddToCartAndWishlist}>
      <button className={styles.AddToCartBtn} onClick={()=>{increaseCartQuantity(id)}}>Add to cart</button>
      <div className={styles.Wishlist}>
        <BsQuestionSquare />
        <button className={styles.AddToWishlist}>Add to wishlist</button>
      </div>
    </div>
  );
};

export default AddToCartAndWishlist;
