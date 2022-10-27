import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "../../QuickViewModel/Modal";
// import { products } from "../ProductDetails";

const ImageCard = ({
  thumbnail: ProductImage,
  ImageIndex,
  ButtonText,
  title,
  description,
  price,
  rating,
  images,
  stock,
  brand,
  category,
 
}) => {
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
          ButtonText === "Quick View" ? styles.QuickView : styles.ShopNow
        }
        onClick={
          ButtonText === "Quick View"
            ? () => {
                setOpenModal(true);
              }
            : null
        }
      >
        {ButtonText}{" "}
      </button>
      {openModal && (
        <Modal
          title={title}
          description={description}
          price={price}
          rating={rating}
          images={images}
          stock={stock}
          brand={brand}
          category={category}
          closeModel={setOpenModal}
          SetIsHovering={SetIsHovering}
        />
      )}
    </div>
  );
};

export default ImageCard;
