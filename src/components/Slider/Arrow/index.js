import React from "react";
import styles from "./styles.module.css";
const Arrow = ({ AreaDirection, ArrowDirection, onClick }) => {
  return (
    <div id={styles[AreaDirection]}>
      <a href="#" onClick={(event)=>{onClick(event)}}>
        {" "}
        <img id={styles[ArrowDirection]} src={"icons/right-arrow.svg"} alt="" />
      </a>
    </div>
  );
};

export default Arrow;
