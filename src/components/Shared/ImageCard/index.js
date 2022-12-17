import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "../../QuickViewModel/Modal";
import HoverButton from "./HoverButton";
const ImageCard = ({
  id,
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
      className={styles.ImageCardContainer}
      onMouseEnter={() => {
        SetIsHovering(ImageIndex);
      }}
      onMouseLeave={() => {
        SetIsHovering(-1);
      }}
    >
      <img
        className={styles.Image}
        id={isHovering === ImageIndex && styles.ImageOpacity}
        src={ProductImage}
        alt=""
      />

      <HoverButton
        ButtonText={ButtonText}
        isHovering={isHovering}
        ImageIndex={ImageIndex}
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal
          id={id}
          title={title}
          description={description}
          price={price}
          rating={rating}
          images={images}
          stock={stock}
          brand={brand}
          category={category}
          openModal={setOpenModal}
          SetIsHovering={SetIsHovering}
        />
      )}
    </div>
  );
};

export default ImageCard;
