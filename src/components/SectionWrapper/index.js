import React from "react";
import styles from "./styles.module.css";

const SectionWrapper = ({ children }) => {
  return <sec>
    <div  className={styles.SectionWrapper}>
    {children && children}
    </div>
   </sec>;
};

export default SectionWrapper;
