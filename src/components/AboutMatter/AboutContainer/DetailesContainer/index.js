import React from "react";
import styles from "./styles.module.css";
import { MatterList } from "./Detailes.js";

const DetailesContainer = () => {
  return (
    <div className={styles.MatterRight}>
      {MatterList.map((item, index) => {
        return (
          <>
            <div className={styles.DetailesBox}>
              <div className={styles.MatterSubtitle}> {item.title}</div>
              {item.detailes.map((i, index) => {
                return (
                  <>
                    {" "}
                    <ul className={styles.MatterDetailes}>
                      <li className={styles.DetailesItem}>{i}</li>
                    </ul>{" "}
                    <br />
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DetailesContainer;
