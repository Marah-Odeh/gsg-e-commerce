import React from "react";
import styles from "./styles.module.css";
import { ExploreList } from "./ExploreItems.js";

const RightCol = () => {
  return (
    <div className={styles.RightBox}>
      {ExploreList.map((item, index) => {
        const { subTitle, title, paragraph, image } = item;
        const length = `${paragraph.length}`;

        return (
          <div className={styles.Box2}>
            <div className={styles.SubTitle}>{subTitle}</div>
            <div className={styles.Title}>{title}</div>
            {length == 0 ? (
              <img className={styles.Image} src={image} />
            ) : (
              <div className={styles.Paragraph}>{paragraph}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RightCol;
