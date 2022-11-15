import React from 'react'
import styles from "./styles.module.css";
const ImageSlider = ({SrcIndex,images}) => {
  return (
    <div className={styles.ImagesSlide}>
         <img
          className={styles.ImagesSlideImg}
          src={images[SrcIndex]} alt="image slider"
        /> 
      </div>
  )
}

export default ImageSlider