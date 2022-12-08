import React from "react";
import styles from "./styles.module.css";

const Card2Data = [
  "/images/PD5.png",
  "/images/PD6.png",
  "/images/PD7.png",
  "/images/PD8.png",
];

const AsSeenOnInstagram = () => {
  return (
    <div className={styles.AsSeenOnInstagram}>
      {Card2Data.map((item, index) => {
        return <img className={styles.AsSeenOnInstagramImage}key={index} src={item} alt="product" />;
      })}
    </div>
  );
};

export default AsSeenOnInstagram;
