import { useState } from "react";
import styles from "./styles.module.css";

const ShowMoreButton = ({setShowMoreValue}) => {
  const [showMore, setShowMore] = useState(true);
  const toggleShowMore = () => {
    setShowMore(!showMore);
    setShowMoreValue(showMore);
  };
  
  return (
    <button onClick={toggleShowMore} className={styles.ShowMore}>
      {showMore ? "Show more" : "Show less"}
    </button>
  );
};

export default ShowMoreButton;
