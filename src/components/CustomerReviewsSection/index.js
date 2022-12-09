import React from "react";
import StarRating from "../QuickViewModel/TitleRatingAndPrice/StarRating";
import SectionsTitles from "../Shared/SectionsTitles";
import styles from "./styles.module.css";
import WriteReviewButton from "./WriteReviewButton";

const CustomerReviewsSection = ({ rating }) => {
  return (
    <div className={styles.CustomerReviewsSection}>
      <SectionsTitles title="Customer Reviews" />
      <div className={styles.ReviewsSectionHeader}>
        {" "}
        <StarRating
          count={5}
          size={25}
          value={rating}
          activeColor={"#FF6008"}
          inactiveColor={"#ddd"}
        />
        <p className={styles.ReviewHeaderParagraph}>
          Share your thoughts with other customers
        </p>
        <WriteReviewButton />
      </div>
      <div className={styles.ReviewsBody}>
        <div className={styles.ReviewsSubTitle}>Top Customers Reviews</div>
        <div className={styles.StarRating}> <StarRating
          count={5}
          size={25}
          value={rating}
          activeColor={"#FF6008"}
          inactiveColor={"#ddd"}
        /></div>
       
        <div className={styles.ReviewsDetails}>
          By <span  className={styles.CustomerName}>Customer Name</span  >on February 18, 2017
        </div>
        <div className={styles.ReviewsDetailsParagraph}>
          Millions of Americans turn to Lasik Surgery when their vision is less
          than perfect and they’re tired of being tied down to wearing glasses
          or contacts. What part of the eye is it that may be causing all your
          vision trouble? Your cornea! When the shape of your cornea is
          irregular, the image on your retina is blurry and out-of-focus. The
          cornea is a part of your eye that works to focus light and projects an
          image on the retina. This focusing of light is called refraction. The
          3 main types of refractive errors are myopia (nearsightedness),
          hyperopia (farsightedness) and astigmatism.{" "}
        </div>
        <a className={styles.ShowMore}>Show more reviews</a>
      </div>
    </div>
  );
};

export default CustomerReviewsSection;
