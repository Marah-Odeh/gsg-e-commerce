import React, { useState } from "react";
import styles from "./styles.module.css";
import ImageSlider from "../ImageSlider";
const ImagesArray = ({ images }) => {
  const [isHovering, SetIsHovering] = useState(0);
  return (
    <div className={styles.ProductImages}>
      <div className={styles.ImagesArray}>
        {images.map((item, index) => {
          return (
            <>
              <img
                onMouseEnter={() => {
                  SetIsHovering(index);
                }}
                className={styles.ProdImage}
                key={index}
                src={item}
                alt="slider image"
              />
            </>
          );
        })}
      </div>
      <ImageSlider SrcIndex={isHovering} images={images} />
    </div>
  );
};

export default ImagesArray;
