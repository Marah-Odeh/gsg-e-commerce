import styles from "./styles.module.css";
import { videossList } from "./VideoesList";
const VideosContainer = () => {
  return (
    <div className={styles.VideosContainer}>
      {videossList.map((item, index) => {
        const{image,title}=item;
        return (
          <div key={index} className={styles.VideoItems}>
            <>
              <img src={image} />
              <p id={styles.Title}>{title}</p>
              <i id={styles.VideoIcon} class="fa-regular fa-circle-play"></i>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default VideosContainer;
