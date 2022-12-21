import React, { useState } from "react";
import { BsQuestionSquare } from "react-icons/bs";
import { useWhishListCart } from "../../../../context/WishListContext";
import styles from "./styles.module.css";
const AddToCartAndWishlist = ({
  increaseCartQuantity,
  id,
  getItemQuantity,
  removeFromCart,
}) => {
  const [addWishList, setAddWishLest] = useState(true);
  const { addToWhishList, removeFromWhishList } = useWhishListCart();
  const ToggleAddWishLest = () => {
    addWishList ? addToWhishList(id) : removeFromWhishList(id);
    setAddWishLest(!addWishList);
  };
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
        <button className={styles.AddToWishlist} onClick={ToggleAddWishLest}>
          {addWishList ? " Add to wishlist" : "Remove from wishlist"}
        </button>
      </div>
    </div>
  );
};

export default AddToCartAndWishlist;
