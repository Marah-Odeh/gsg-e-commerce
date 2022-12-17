import React from "react";
import MatterInterface from "../MatterInterface";
import styles from "./styles.module.css";

const Techniques = () => {
  return (
    <MatterInterface title="Our Techniques">
      <img src="/images/techniques.png" id={styles.TechniquesImg}/>
    </MatterInterface>
  );
};

export default Techniques;
