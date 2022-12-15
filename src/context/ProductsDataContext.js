import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
// import ReactLoading from "react-loading";

const ProductsDataContext = createContext({});

const ProductsDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let ignore = false;
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (!ignore) {
          console.log(res.data.products);
          setProducts(res.data.products);

          console.log("!ignore");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      ignore = true;
      console.log("ignore");
    };
  }, []);

  return (
    <ProductsDataContext.Provider value={{ products }}>
      {children}
    </ProductsDataContext.Provider>
  );
};

export default ProductsDataProvider;

export const useProductsData = () => {
  return useContext(ProductsDataContext);
};
