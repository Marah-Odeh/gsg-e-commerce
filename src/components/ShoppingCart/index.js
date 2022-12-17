import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "./styles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../CartItem";

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCartMenu } = useShoppingCart();
  const DrawerStyle = {
    width: "350px",
    overflowY: "auto",
  };
  return (
    <Drawer
      direction="right"
      open={isOpen}
      style={DrawerStyle}
      onClose={closeCartMenu}
    >
      <div className={styles.DrawerHeader}>
        <p className={styles.Title}>Cart</p>
        <a onClick={() => closeCartMenu()}>
          <AiOutlineClose />
        </a>{" "}
      </div>
      <div className={styles.DrawerBody}>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </Drawer>
  );
};

export default ShoppingCart;
