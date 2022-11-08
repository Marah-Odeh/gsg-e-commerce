import React from "react";
import styles from "./styles.module.css";

const BurgerMenu = () => {
  const menuItems = ["Login", "shop", "fabric", "journal", "About"];

  return (
    <div className={styles.BurgerMenu}>
      <img
        className={styles.BurgerMenuIcon}
        src={"/icons/icon-hamburger.svg"}
        alt="Burger menu"
      />
    </div>
  );
};

export default BurgerMenu;
