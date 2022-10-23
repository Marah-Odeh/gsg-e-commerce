import React, { useState } from "react";
import styles from "./styles.module.css";
const SizeBoxes = () => {
  const [isActive, setisActive] = useState(false);
  const values = [
    { content: "1" },
    { content: "2" },
    { content: "3" },
    { content: "4" },
  ];

  const handleClick = (id) => {
    setisActive((prevState) => ({
      ...isActive,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className={styles.SizeBoxesContainer}>
      <p className={styles.SizeBoxesTitle}>Size</p>
      <div className={styles.Container}>
        <div className={styles.SizeBoxes}>
          {values.map((value, i) => (
            <button
              key={i}
              style={{
                backgroundColor: isActive[`${i}`] ? "#F3F3F3" : "",
              }}
              onClick={() => handleClick(i)}
              className={styles.SizeBox}
            >
              {value.content}
            </button>
          ))}
        </div>
        <p className={styles.SizeGuidelines}>Size Guidelines</p>
      </div>
      <p className={styles.SizeClarification}>
        Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.
      </p>
    </div>
  );
};

export default SizeBoxes;
