import styles from "./styles.module.css";
import Arrow from "./Arrow";
import { slides } from "./Slides";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    width: "100%",
    height: "600px",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const goToPrevious = (event) => {
    event.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = (event) => {
    event.preventDefault();
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.SliderContainer}>
      <>
        <div className={styles.Slides} style={slideStyle}></div>;
        <p id={styles.Title}>
          Perfume Tips <br />
          Tricks
        </p>
        <Link to="/products"id={styles.ShopNow}>Shop Now </Link>
        <Arrow
          AreaDirection="Left"
          ArrowDirection="NextArrow"
          onClick={goToNext}
        />
        <Arrow
          AreaDirection="Right"
          ArrowDirection="PrevArrow"
          onClick={goToPrevious}
        />
      </>
    </div>
  );
};

export default Slider;
