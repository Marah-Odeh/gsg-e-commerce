import { useShoppingCart } from "../../../context/ShoppingCartContext";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import UserLogin from "../UserLogin";
import { useCookies } from "react-cookie";

const RightIcons = () => {
  const { cartQuantity, openCartMenu } = useShoppingCart();
  const [cookie, setCookie] = useCookies();

  return (
    <>
      {(cookie.token || cookie.token!==undefined) ? (
        <UserLogin />
      ) : (
        <Link to="/login" className={styles.Login} href="#">
          Login
        </Link>
      )}

      <div className={styles.IconsContainer}>
        <>
          <img src="icons/search.svg" alt="" />
          <img src="icons/heart.svg" alt="" />
          <div className={styles.CartIcon}>
            {" "}
            <span className={styles.QuantityCircle}>{cartQuantity}</span>
            <img src="icons/Bag.svg" alt="" onClick={openCartMenu} />
          </div>
        </>
      </div>
    </>
  );
};

export default RightIcons;
