import React from "react";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css";

const Card1Data = [
  { image: "/images/PD4.png", description: "Lorem ipsum dolor sit amet" },
  { image: "/images/PD3.png", description: "Lorem ipsum dolor sit amet" },
  { image: "/images/PD2.png", description: "Lorem ipsum dolor sit amet" },
];

const ProductCardContainer = ({ cardNumber }) => {
  return (
    <div className={styles.ProductCardContainer}>
      {Card1Data.map((item) => {
        return (
          <ProductCard
            productImage={item.image}
            productDescription={item.description}
          />
        );
      })}
    </div>
  );
};

export default ProductCardContainer;
