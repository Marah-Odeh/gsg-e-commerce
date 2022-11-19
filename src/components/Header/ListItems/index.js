import styles from "./styles.module.css";
import { NavData } from "../NavData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ListItems = ({ logoClicked, setLogoClicked }) => {
  const [isActive, setIsActive] = useState(false);
  const [itemIndex, setIndex] = useState(-1);
  function HandleItemOnClick(index) {
    setIsActive(true);
    setIndex(index);
    setLogoClicked(false);
  }
  return (
    <ul className={styles.MenuList}>
      {NavData.map((item, index) => {
        const { title, path } = item;
        return (
          <li key={index} className={styles.MenuItems}>
            <Link
              to={path}
              onClick={() => {
                HandleItemOnClick(index);
              }}
            >
              <div
                id={
                  logoClicked === false && itemIndex === index && isActive
                    ? styles.Clicked
                    : ""
                }
              >
                {" "}
                {title}
              </div>
              <span>
                {logoClicked === false && itemIndex === index && isActive ? (
                  <IoIosArrowUp color="#FF6008" />
                ) : (
                  <i class="fa-solid fa-angle-down fa-lg fa-fw"></i>
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;
