import React from "react";
import styles from "./styles.module.css";
import { useWhishListCart } from "../../../context/WishListContext";
import { HiHeart } from "react-icons/hi";
import { useProductsData } from "../../../context/ProductsDataContext";
const WishListCard = ({ id }) => {
  const { products }=useProductsData();
  const item = products.find((i) => i.id === id);
  const { removeFromWhishList } = useWhishListCart();
  if (item == null) return null;
  return (
    <div className={styles.WishListCard}>
      <img className={styles.CartItemImage} src={item.thumbnail} />
      <p> {item.title}</p>
      <a
        onClick={() => {
          removeFromWhishList(id);
        }}
        className={styles.Heart}
      >
        <HiHeart className={styles.HeartIcon}/>
      </a>
    </div>
  );
};

export default WishListCard;
