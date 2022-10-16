import styles from "./styles.module.css";
import VideosContainer from "../VideosContainer";
import ShowMoreButton from "../ShowMoreButton";

const RecommendedVideosContainer = () => {
  return (
    <div className={styles.RecomendedVideoesContainer}>
      <>
        <VideosContainer />
        <ShowMoreButton />
      </>
    </div>
  );
};

export default RecommendedVideosContainer;
