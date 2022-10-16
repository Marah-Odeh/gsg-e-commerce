import styles from "./styles.module.css";
import ListComponent from "./ListComponent";
import SubcribeContainer from "./ListComponent/SubcribeContainer";

const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <><ListComponent/>
      <SubcribeContainer/>
      <div className={styles.CopyRight}>
        <p>© Copyright Matter PTE LTD 2017</p>
      </div>
      </>
    </footer>
  );
};

export default Footer;
