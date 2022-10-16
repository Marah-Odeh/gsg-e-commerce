import styles from "./styles.module.css";

const RightIcons = () => {
  return (
    <>
      <a className={styles.Login} href="#">
        Login
      </a>
      <div className={styles.IconsContainer}>
        <>
          <img src="icons/search.svg" alt="" />
          <img src="icons/heart.svg" alt="" />
          <img src="icons/Bag.svg" alt="" />
        </>
      </div>
    </>
  );
};

export default RightIcons;
