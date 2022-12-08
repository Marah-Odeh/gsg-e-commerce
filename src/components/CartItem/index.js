import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const CartItem = ({ id, quantity }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("inside use effect");
    let ignore = false;
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (!ignore) {
          console.log(res.data.products);
          setProducts(res.data.products);
          console.log("!ignore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      ignore = true;
      console.log("ignore");
    };
  }, []);

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
        <div>${item.price}</div>
      </div>
      <div>${item.price * quantity}</div>
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
