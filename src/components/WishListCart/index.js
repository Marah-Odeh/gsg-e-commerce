import React from "react";
import { useWhishListCart } from "../../context/WishListContext";
import styles from "./styles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import WishListCard from "./WishListCard";

const WishListCart = ({ isOpen }) => {
  const { whishListItems, closeWhishListMenu } = useWhishListCart();

  return (
    <>
      {isOpen && (
        <div className={styles.ModalBackground}>
          <div className={styles.ModalContainer}>
            <div className={styles.HeaderContainer}>
              <p>WishList</p>
              <button className={styles.CloseBtn} onClick={closeWhishListMenu}>
                <AiOutlineClose />
              </button>
            </div>
            <div className={styles.ModalBody}>
            {whishListItems.map((item) => {
          return <WishListCard key={item.id} {...item} />;
        })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WishListCart;
