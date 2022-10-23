import React from "react";
import styles from "./styles.module.css";
import QuantityField from "../QuantityField";
import SizeBoxes from "../SizeBoxes";
import ModalDescription from "../DescriptionContainer";
import InformationTable from "../TableContainer";
import TitleRatingAndPrice from "../TitleRatingAndPrice";
import ProductImages from "../ImagesContainer";

const Modal = ({ closeModel,title,description,price,rating,images }) => {
  return (
    <div className={styles.ModalBackground}>
      <div className={styles.ModalContainer}>
        <div className={styles.HeaderContainer}>
          <p className={styles.HeaderTitle}>{title}</p>
          <button
            className={styles.CloseBtn}
            onClick={() => {
              closeModel(false);
            }}
          >
            X
          </button>
        </div>
        <div className={styles.ModalBody}>
          <div className={styles.ImagesBox}>
            <ProductImages images={images}/>
          </div>
          <div className={styles.DetailsBox}>
            <TitleRatingAndPrice title={title} rating={rating} price={price}/>
            <ModalDescription description={description}/>
            <InformationTable />
            {/* <SizeBoxes /> */}
            <QuantityField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
