import React from "react";
import styles from "./styles.module.css";
import { productsList } from "./ProductImages.js";
import ImageCard from "../../Shared/ImageCard";

const ShopContainer = () => {
  return (
    <div className={styles.ShopContainer}>
      {productsList.map((item, index) => {
        const { image, type } = item;
        return (
          <div key={index} className={styles.ProductItems}>
            <>
              <ImageCard
                thumbnail={image}
                ImageIndex={index}
                ButtonText="SHOP NOW"
              />
              <p id={styles.Type}>{type}</p>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default ShopContainer;
