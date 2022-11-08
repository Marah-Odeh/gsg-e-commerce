import React from "react";
import styles from "./styles.module.css";

const SubcribeContainer = () => {
  return (
    <div className={styles.SubscribeCont}>
      <h4>Subscribe to newsletter</h4>
      <form className={styles.Form}>
        <label className={styles.EmailLabel}>
          <input
            className={styles.EmailInput}
            type="email"
            placeholder="Enter your email address"
          />
        </label >
        <input
          className={styles.SubscribeInput}
          type="submit"
          value="Subscribe"
        />
      </form>
      <div className={styles.FooterIcons}>
        <img
          className={styles.FacbookIcon}
          src={"icons/FacebookIcon.svg"}
          alt=""
        />
        <img src={"icons/TwitterIcon.svg"} alt="" />
      </div>
    
    </div>
  );
};

export default SubcribeContainer;
