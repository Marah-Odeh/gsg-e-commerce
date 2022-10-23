import styles from "./styles.module.css";
import { productsList } from "./Product";
import ImageCard from "../../Shared/ImageCard";
import NewProduct from "./NewProduct";
import React from "react";

const ProductBox = () => {
  return (
    <div className={styles.ProductsBox}>
      {productsList.map((item, index) => {
        const { image, description, price, NewBox } = item;
        const NewBlock = `${NewBox}`;
        return NewBlock === "Y" ? (
          <div key={index} className={styles.ProductItems}>
            <>
              <NewProduct />
              <ImageCard
                ProductImage={image}
                ImageIndex={index}
                BottonText="Quick View"
              />
              <p id={styles.Description}>{description}</p>
              <p id={styles.Price}>{price}</p>
            </>
          </div>
        ) : (
          <div key={index} className={styles.ProductItems}>
            <>
              <ImageCard
                ProductImage={image}
                ImageIndex={index}
                BottonText="Quick View"
              />
              <p id={styles.Description}>{description}</p>
              <p id={styles.Price}>{price}</p>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default ProductBox;
