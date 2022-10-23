import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "../../QuickViewModel/Modal";
import { products } from "../ProductDetailes";

const ImageCard = ({ ProductImage, ImageIndex, BottonText }) => {
  const [isHovering, SetIsHovering] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className="ImageCardContainer"
      onMouseEnter={() => {
        SetIsHovering(ImageIndex);
      }}
      onMouseLeave={() => {
        SetIsHovering(-1);
      }}
    >
      <img
        className={styles.Image}
        id={`${isHovering === ImageIndex ? `${styles.ImageOpacity}` : ""}`}
        src={ProductImage}
        alt=""
      />

      <button
        id={`${isHovering === ImageIndex ? "" : `${styles.hidden}`}`}
        className={
          BottonText === "Quick View" ? styles.QuickView : styles.ShopNow
        }
        onClick={
          BottonText === "Quick View"
            ? () => {
                setOpenModal(true);
              }
            : null
        }
      >
        {BottonText}{" "}
      </button>
      {products.map((item, index) => {
        // const { title, description, price } = item;
        return (
          index === ImageIndex &&
          openModal && <Modal {...item}  closeModel={setOpenModal}  />
        );
      })}
    </div>
  );
};

export default ImageCard;
