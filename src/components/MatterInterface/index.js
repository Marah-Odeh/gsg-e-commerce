import styles from "./styles.module.css";
import React from "react";
import Title from "../Shared/SectionsTitles";

const MatterInterface = ({ title, children }) => {
  const SecTitle = title.split(" ");
  return (
    <section
      className={`${
        title === "Featured"
          ? `${styles.Featured}`
          : title === "About Matter"
          ? `${styles.AboutMatter}`
          : title === "Explore"
          ? `${styles.Explore}`
          : title === "Shop"
          ? `${styles.Shop}`
          : title === "Recommended Videos"
          ? `${styles.RecommendedVideos}`
          : title === "As Seen On"
          ? `${styles.AsSoonOn}`
          : ""
      }`}
    >
      <Title title={title} />
      {children && children}
    </section>
  );
};

export default MatterInterface;
