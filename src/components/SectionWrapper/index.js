import React from "react";
import styles from "./styles.module.css";

const SectionWrapper = ({ children }) => {
  return <section>
    <div  className={styles.SectionWrapper}>
    {children && children}
    </div>
   </section>;
};

export default SectionWrapper;
