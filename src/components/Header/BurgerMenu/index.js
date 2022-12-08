import React, { useState } from "react";
import styles from "./styles.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavData } from "../NavData";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const BurgerMenu = () => {
  const [flag, setFlag] = useState(false);
  const [cookie] = useCookies();
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
          {cookie.token ? (
            <></>
          ) : (
            <Link to={"/login"} className={styles.MenuLink}>
              <li className={styles.MenuItem}>
                Login
                <span className={styles.ArrowIcon}>
                  <MdKeyboardArrowRight />
                </span>
              </li>
            </Link>
          )}

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
