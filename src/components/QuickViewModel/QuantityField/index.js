import React from "react";
import QuantityCounter from "./QuantityCounter";
import AddToCartAndWishlist from "./AddToCartAndWishlist";
import styles from "./styles.module.css";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

const QuantityField = ({ id }) => {
  const { getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart } = useShoppingCart();
  return (
    <div className={styles.QuantityField}>
      <p className={styles.QuantityTitle}>Quantity</p>
      <div className={styles.QuantityItems}>
        <QuantityCounter id={id} getItemQuantity={getItemQuantity} increaseCartQuantity={increaseCartQuantity} decreaseCartQuantity={decreaseCartQuantity}/>
        <AddToCartAndWishlist
          increaseCartQuantity={increaseCartQuantity}
          getItemQuantity={getItemQuantity}
          removeFromCart={removeFromCart}
          id={id}
        />
      </div>
    </div>
  );
};

export default QuantityField;
