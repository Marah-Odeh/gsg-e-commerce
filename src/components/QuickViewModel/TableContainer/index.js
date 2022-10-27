import React from "react";
import styles from "./styles.module.css";

const InformationTable = ({stock,brand,category}) => {
  const titles = ["Stock", "Brand", "Category"];
  const values = [stock,brand,category];
  return (
    <div className={styles.Table}>
      <div className={styles.LeftCol}>
        {titles.map((title, index) => {
          return <div key={index} className={styles.RightItem}> {title}</div>;
        })}
      </div>

      <div className={styles.RightCol}>
        {values.map((value, index) => {
          return <div  key={index} className={styles.LeftItem}> {value}</div>;
        })}
      </div>
    </div>
  );
};

export default InformationTable;
