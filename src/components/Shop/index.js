import styles from "./styles.module.css";
import Title from "../Shared/SectionsTitles";
import ShopContainer from "./ShopContainer";

const Shop = () => {
  return (
    <section className={styles.ShopSection}>
      <>
        <Title title={"Shop"} />
        <ShopContainer />
      </>
    </section>
  );
};

export default Shop;
