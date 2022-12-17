import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const HoverButton = ({ ButtonText, isHovering, ImageIndex, setOpenModal }) => {
  return (
    <>
      {ButtonText === "Quick View" ? (
        <button
          id={isHovering !== ImageIndex && styles.hidden}
          className={
            ButtonText === "Quick View" ? styles.QuickView : styles.ShopNow
          }
          onClick={() => {
            setOpenModal(true);
          }}
        >
          {ButtonText}{" "}
        </button>
      ) : (
        <Link to="/products">
          <button
            id={isHovering !== ImageIndex && styles.hidden}
            className={
              ButtonText === "Quick View" ? styles.QuickView : styles.ShopNow
            }
          >
            {ButtonText}{" "}
          </button>
        </Link>
      )}
    </>
  );
};

export default HoverButton;
