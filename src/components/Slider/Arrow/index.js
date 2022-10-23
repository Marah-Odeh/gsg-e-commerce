import React from "react";
import styles from "./styles.module.css";
const Arrow = ({ AreaDirection, ArrowDirction }) => {
  return (
    <div id={styles[AreaDirection]}>
      <a href="#" >
        {" "}
        <img id={styles[ArrowDirction]} src={"icons/right-arrow.svg"} alt="" />
      </a>
    </div>
  );
};

export default Arrow;
