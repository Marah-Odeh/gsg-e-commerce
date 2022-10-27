import styles from "./styles.module.css";
import FirstParagraph from "./FirstParagraph";
import DetailsContainer from "./DetailsContainer";

const AboutContainer = () => {
  return (
    <div className={styles.AboutMatter}>
      <div className={styles.LeftCol}>
        <img src={"images/aboutMatter.png"} alt="" />
      </div>
      <div className={styles.RightCol}>
        <FirstParagraph />
        <DetailsContainer />
      </div>
    </div>
  );
};

export default AboutContainer;
