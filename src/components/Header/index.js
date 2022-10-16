import styles from "./styles.module.css";
import ListItems from "./ListItems";
import RightIcons from "./RightIcons";

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <>
      <h2 className={styles.Logo}>matters</h2>
      <ListItems />
      <RightIcons />
      </>
    </header>
  );
};

export default Header;
