import React from "react";
import styles from "./styles.module.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useProductsData } from "../../context/ProductsDataContext";

const CartItem = ({ id, quantity }) => {
  const { products } = useProductsData();
  const item = products.find((i) => i.id === id);
  const { removeFromCart } = useShoppingCart();
  if (item == null) return null;
  return (
    <div className={styles.CartItem}>
      <img className={styles.CartItemImage} src={item.thumbnail} />
      <div className={styles.CartItemDetails}>
        <div className={styles.QuantityTitleAndPrice}>
          <div className={styles.CartItemTitle}>{item.title}</div>
          {quantity > 1 && (
            <span className={styles.CartItemNumber}>x{quantity}</span>
          )}
        </div>
        <div className={styles.Price}>${item.price}</div>
      </div>
      <div className={styles.Price}>${item.price * quantity}</div>
      <div className={styles.RemoveItem}>
        {" "}
        
        <button
          className={styles.RemoveBtn}
          onClick={() => {
            removeFromCart(id);
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
