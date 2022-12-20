import React from "react";
import { BsQuestionSquare } from "react-icons/bs";
import styles from "./styles.module.css";
const AddToCartAndWishlist = ({
  increaseCartQuantity,
  id,
  getItemQuantity,
  removeFromCart,
}) => {
  let quantity = getItemQuantity(id);
  return (
    <div className={styles.AddToCartAndWishlist}>
      {quantity === 0 ? (
        <button
          className={styles.AddToCartBtn}
          onClick={() => {
            increaseCartQuantity(id);
          }}
        >
          Add to cart
        </button>
      ) : (
        <button
          className={styles.AddToCartBtn}
          onClick={() => {
            removeFromCart(id);
          }}
        >
          Remove from cart
        </button>
      )}

      <div className={styles.Wishlist}>
        <BsQuestionSquare />
        <button className={styles.AddToWishlist}>Add to wishlist</button>
      </div>
    </div>
  );
};

export default AddToCartAndWishlist;
