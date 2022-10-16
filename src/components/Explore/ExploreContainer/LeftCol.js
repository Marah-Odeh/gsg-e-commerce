import React from "react";
import styles from "./styles.module.css";
const LeftCol = () => {
  return (
    <div className={styles.Box1}>
        <div className={styles.SubTitle}> "FIELDTESTED JANUARY 19, 2017"</div>
        <div className={styles.Title}>"Connected Clothing: Raye Padit"</div>
        <div className={styles.Paragraph}>
          "As a voice for conscious fashion, Raye Padit is motivated by the
          belief that one person’s actions, no matter how small, holds great
          impact. This core ideal has driven him to start his three passion
          projects: Connected Threads Asia, PeyaR, and Swagalls. "
        </div>
        <img className={styles.Image} src={"images/ExploreBox1.png"} />
    </div>
  );
};

export default LeftCol;
