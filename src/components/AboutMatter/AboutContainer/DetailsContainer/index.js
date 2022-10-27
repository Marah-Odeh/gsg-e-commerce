import React from "react";
import styles from "./styles.module.css";
import { MatterList } from "./Details.js";

const DetailsContainer = () => {
  return (
    <div className={styles.MatterRight}>
      {MatterList.map((item, index) => {
        return (
          <>
            <div className={styles.DetailsBox}>
              <div className={styles.MatterSubtitle}> {item.title}</div>
              {item.details.map((i, index) => {
                return (
                  <>
                    {" "}
                    <ul className={styles.MatterDetails}>
                      <li className={styles.DetailsItem}>{i}</li>
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

export default DetailsContainer;
