import React from "react";
import styles from "./styles.module.css";
import QuantityField from "../QuantityField";
import ModalDescription from "../DescriptionContainer";
import InformationTable from "../TableContainer";
import TitleRatingAndPrice from "../TitleRatingAndPrice";
import ProductImages from "../ImagesContainer";
import { AiOutlineClose } from "react-icons/ai";


const Modal = ({
  closeModel,
  title,
  description,
  price,
  rating,
  images,
  stock,
  brand,
  category,
  SetIsHovering,
}) => {
  return (
    <div className={styles.ModalBackground}>
      <div className={styles.ModalContainer}>
        <div className={styles.HeaderContainer}>
          <p className={styles.HeaderTitle}>{title}</p>
          <button
            className={styles.CloseBtn}
            onClick={() => {
              closeModel(false);
              SetIsHovering(-1);
            }}
          >
          <AiOutlineClose/>
          </button>
        </div>
        <div className={styles.ModalBody}>
          <div className={styles.ImagesBox}>
            <ProductImages images={images} />
          </div>
          <div className={styles.DetailsBox}>
            <TitleRatingAndPrice title={title} rating={rating} price={price} />
            <ModalDescription description={description} />
            <InformationTable stock={stock} brand={brand} category={category} />
            <QuantityField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
