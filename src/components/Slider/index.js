import styles from "./styles.module.css";
import Arrow from "./Arrow";

const Slider = () => {
  return (
    <div className={styles.SliderContainer}>
      <>
        <img src={"images/sliderImage1.png"} alt="" />
        <p id={styles.Title}>
          Perfume Tips <br />
          Tricks
        </p>
        <p id={styles.ShopNow}>Shop Now </p>

        <Arrow AreaDirection="Left" ArrowDirction="NextArrow" />
        <Arrow AreaDirection="Right" ArrowDirction="PrevArrow" />
      </>
    </div>
  );
};

export default Slider;
