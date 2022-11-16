import React, { useState } from "react";
import styles from "./styles.module.css";

const ProductBanner = ({ products, filteredValue }) => {
  const thumbnails = products.map((x) => x.thumbnail);

  let CategoryItem = [...products].filter(
    (x) => x.category === filteredValue
  )[1];
  return (
    <div className={styles.ProductBanner}>
      <img
        className={styles.BannerImage}
        src={filteredValue === "" ? thumbnails[25] : CategoryItem.thumbnail}
        alt="banner image"
      />
      {filteredValue === "" ? (
        <div className={styles.BannerParagraph}>
          <div className={styles.BannerTitle}>See our products </div>{" "}
          <div className={styles.BannerDescription}> Groceries,Home-Decoration, Fragrances and more.. </div>
        </div>
      ) : (
        <p className={styles.BannerTitle}>{filteredValue}</p>
      )}
    </div>
  );
};

export default ProductBanner;
