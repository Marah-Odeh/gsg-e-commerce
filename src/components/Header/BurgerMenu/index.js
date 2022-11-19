import React, { useState } from "react";
import styles from "./styles.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavData } from "../NavData";
import { Link } from "react-router-dom";
const BurgerMenu = () => {
  const [flag, setFlag] = useState(false);
  function HandelMenuOnClick() {
    setFlag(!flag);
  }

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
          {NavData.map((item) => {
            const { title, path } = item;
            return (
              <Link to={path} className={styles.MenuLink}>
                <li className={styles.MenuItem}>
                  {" "}
                  {title}
                  <span className={styles.ArrowIcon}>
                    <MdKeyboardArrowRight />
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
