import React from "react";
import styles from "./styles.module.css";
import StarRating from "./StarRating";

const TitleRatingAndPrice = ({title,rating,price}) => {
  return (
    <div className={styles.Container}>
      <p className={styles.Title}>
      {title}
      </p>
      <div className={styles.PriceAndRating}>
        <p className={styles.Price}>SGD {price} </p>
        <StarRating
          count={5}
          size={25}
          value={rating}
          activeColor={"#FF6008"}
          inactiveColor={"#ddd"}
        />
      </div>
    </div>
  );
};

export default TitleRatingAndPrice;
