import React, { useState } from "react";
import styles from "./styles.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const BurgerMenu = () => {
  const [flag, setFlag] = useState(false);
  function HandelMenuOnClick() {
    setFlag(!flag);
  }
  const menuItems = ["Login", "shop", "fabric", "journal", "About"];

  return (
    <div className={styles.BurgerMenu}>
      <img
        onClick={HandelMenuOnClick}
        className={styles.BurgerMenuIcon}
        src={flag ? "/icons/close.png" : "/icons/icon-hamburger.svg"}
        alt="Burger menu"
      />
      {flag && (
        <ul className={styles.BurgerMenuList}>
          {menuItems.map((item) => {
            return (
              <li className={styles.MenuItem}>
                <a>
                  {" "}
                  {item}
                 <span  className={styles.ArrowIcon}><MdKeyboardArrowRight /></span> 
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
