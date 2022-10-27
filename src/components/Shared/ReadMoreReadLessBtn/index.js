import React, { useState } from "react";
import styles from "./styles.module.css";

const ReadMoreReadLessBtn = ({ children ,limit}) => {
  const [isReadMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prevState) => !prevState);

  };
  return (
    <div className={styles.ReadMoreReadLess}>
      {isReadMore ? children : children.substr(0,limit)}
      <button className={styles.SeeMore} onClick={ toggleBtn  }>
      {isReadMore ?  "See less":"See more"}
      </button>
    </div>
  );
};

export default ReadMoreReadLessBtn;
