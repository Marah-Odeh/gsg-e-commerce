import React from "react";
import styles from"./styles.module.css"
const Arrow = ({AreaDirection,ArrowDirction}) => {
  return (
    <div id={styles[AreaDirection]}>
      <img id={styles[ArrowDirction]} src={"icons/right-arrow.svg"} alt="" />
    </div>
  );
};

export default Arrow;
