import React from "react";
import styles from "./styles.module.css";
import { IoReloadOutline } from "react-icons/io5";

const Loading = ({ LoadingMoreProducts, Full }) => {
  console.log("Full", Full);
  return (
    <a onClick={LoadingMoreProducts}>
      <div className={styles.LoadingContainer} id={Full ? styles.hidden : "dis"}>
        <IoReloadOutline className={styles.LoadingIcon} />
        <p className={styles.Loading}>Loading</p>
      </div>
    </a>
  );
};

export default Loading;
