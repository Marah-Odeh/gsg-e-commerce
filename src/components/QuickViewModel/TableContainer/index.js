import React from "react";
import styles from "./styles.module.css";

const InformationTable = () => {
  const titles = ["Artisan Employment", "Partnership", "In Collab"];
  const values = ["54 jobs", "Randall Armstrong", "Augusta Mendoza"];
  return (
    <div className={styles.Table}>
      <div className={styles.LeftCol}>
        {titles.map((item, index) => {
          return <div className={styles.RightItem}> {item}</div>;
        })}
      </div>

      <div className={styles.RightCol}>
        {values.map((item, index) => {
          return <div className={styles.LeftItem}> {item}</div>;
        })}
      </div>
    </div>
  );
};

export default InformationTable;
