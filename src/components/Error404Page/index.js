import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Error404Page = () => {
  return (
    <div className={styles.Error404Container}>
      <div className={styles.Error404Animation}>
        <img src={"/assets/404-page-animation-example.gif"} alt="404 error" />
      </div>
      <h3>PAGE NOT FOUND</h3>
      <Link to="/" className={styles.ReturnHomeBtn}>
        Return to home
      </Link>
    </div>
  );
};

export default Error404Page;
