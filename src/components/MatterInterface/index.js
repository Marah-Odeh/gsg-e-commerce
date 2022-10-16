import styles from "./styles.module.css";
import React from "react";
import Title from "../Shared/SectionsTitles";

const MatterInterface = ({ title, children }) => {
  const SecTitle = title.split(" ");
  return (
    <section className={styles[SecTitle]}>
      <Title title={title} />
      {children && children}
    </section>
  );
};

export default MatterInterface;
