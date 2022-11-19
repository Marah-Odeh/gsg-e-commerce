import styles from "./styles.module.css";
import ListItems from "./ListItems";
import RightIcons from "./RightIcons";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
const[logoClicked,setLogoClicked]=useState(false);
  return (
    <header className={styles.HeaderContainer}>
      <>
      <Link to="/" className={styles.Logo} onClick={()=>{setLogoClicked(true)}}>matters</Link>
      <BurgerMenu/>
      <ListItems logoClicked={logoClicked}setLogoClicked={setLogoClicked}/>
      <RightIcons  />
      </>
    </header>
  );
};

export default Header;
