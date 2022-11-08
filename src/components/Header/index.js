import styles from "./styles.module.css";
import ListItems from "./ListItems";
import RightIcons from "./RightIcons";
import BurgerMenu from "./BurgerMenu";
const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <>
      <h2 className={styles.Logo}>matters</h2>
      <BurgerMenu/>
      <ListItems />
      <RightIcons />
      </>
    </header>
  );
};

export default Header;
