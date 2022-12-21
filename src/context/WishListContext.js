import { createContext, useContext, useState, useEffect } from "react";
import WishListCart from "../components/WishListCart/index.js";
const WhishListContext = createContext({});
const initialCartItems = localStorage.getItem("whishList-cart")
  ? JSON.parse(localStorage.getItem("whishList-cart"))
  : [];

const WishListProvider = ({ children }) => {
  const [whishListItems, setWhishListItems] = useState(initialCartItems);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("whishList-cart", JSON.stringify(whishListItems));
  }, [whishListItems]);

  const openWhishListMenu = () => {
    setIsOpen(true);
  };
  const closeWhishListMenu = () => {
    setIsOpen(false);
  };

  const addToWhishList = (id) => {
    // setWhishListItems((currItems) => currItems.filter((item) => item.id === id));
    setWhishListItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id }];
      }
    });
  };
  const removeFromWhishList = (id) => {
    setWhishListItems((currItems) =>
      currItems.filter((item) => item.id !== id)
    );
  };
  const whishListQuantity = whishListItems.length;

  return (
    <WhishListContext.Provider
      value={{
        whishListItems,
        addToWhishList,
        removeFromWhishList,
        openWhishListMenu,
        closeWhishListMenu,
        whishListQuantity,
      }}
    >
      {children}
      <WishListCart isOpen={isOpen} />
    </WhishListContext.Provider>
  );
};

export default WishListProvider;

export const useWhishListCart = () => {
  return useContext(WhishListContext);
};
