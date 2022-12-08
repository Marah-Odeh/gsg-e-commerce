import React from "react";
import ProductCardContainer from "./ProductCardContainer";
import styles from "./styles.module.css";

const ProductDetailsContainer = () => {
  const paragraph1 =
    "I have taste grilled meats around the world. Before i will guide you to the various technologies (gas barbecues, charcoal barbecues, Mongolian, sauces, recipes ) i will tell you about the Greek way.";
  const paragraph2 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const paragraph3 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <>
      <img
        className={styles.ProductImage}
        src={"images/PD1.png"}
        alt="product banner"
      />
      <div className={styles.ProductDetailsParagraph} id={styles.Paragraph1}>
        {paragraph1}
      </div>
      <div className={styles.ProductDetailsParagraph} id={styles.Paragraph2}>
        {paragraph2}
      </div>
      <ProductCardContainer cardNumber={"card1"}/>
      <div className={styles.ProductDetailsParagraph} id={styles.Paragraph3}>
        {paragraph3}
      </div>
    </>
  );
};

export default ProductDetailsContainer;
