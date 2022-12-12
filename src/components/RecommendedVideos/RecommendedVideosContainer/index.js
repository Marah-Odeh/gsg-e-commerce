import styles from "./styles.module.css";
import VideosContainer from "../VideosContainer";
import ShowMoreButton from "../ShowMoreButton";
import { useState } from "react";

const RecommendedVideosContainer = () => {
  const [showMoreValue, setShowMoreValue] = useState(false);
  return (
    <div className={styles.RecomendedVideoesContainer}>
      <>
        <VideosContainer showMoreValue={showMoreValue} />
        <ShowMoreButton setShowMoreValue={setShowMoreValue} />
      </>
    </div>
  );
};

export default RecommendedVideosContainer;
