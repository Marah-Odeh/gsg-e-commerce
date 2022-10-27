import React from "react";
import ReadMoreReadLessBtn from "../../Shared/ReadMoreReadLessBtn";
import styles from "./styles.module.css";
const ModalDescription = ({ description }) => {
  return (
    <div className={styles.DescriptionCont}>
      <p className={styles.Title}>Description</p>
      <ReadMoreReadLessBtn limit={90}>{description}</ReadMoreReadLessBtn>
    </div>
  );
};

export default ModalDescription;
