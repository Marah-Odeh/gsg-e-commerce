import styles from "./styles.module.css";
import { videossList } from "./VideoesList";
const VideosContainer = ({ showMoreValue }) => {
  let Videos;
  if (showMoreValue) {
    Videos = videossList;
  } else {
    Videos = videossList.slice(0, 3);
  }
  return (
    <>
      <div className={styles.VideosContainer}>
        {Videos.map((item, index) => {
          const { image, title, videoLink } = item;
          return (
            <div key={index} className={styles.VideoItems}>
              <a href={videoLink} target="_blank">
                <img src={image} />
                <p id={styles.Title}>{title}</p>
                <i id={styles.VideoIcon} className="fa-regular fa-circle-play"></i>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideosContainer;
