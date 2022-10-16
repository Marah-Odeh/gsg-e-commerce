import styles from "./styles.module.css";
import FirstParaghraph from "./Firstparagraph";
import DetailesContainer from "./DetailesContainer";

const AboutContainer = () => {
  return (
    <div className={styles.AboutMatter}>
      <div className={styles.LeftCol}>
        <img src={"images/aboutMatter.png"} alt="" />
      </div>
      <div className={styles.RightCol}>
        <FirstParaghraph />
        <DetailesContainer />
      </div>
    </div>
  );
};

export default AboutContainer;
