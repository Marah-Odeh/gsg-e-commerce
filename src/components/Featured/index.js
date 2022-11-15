import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import axios from "axios";

const Featured = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("inside use effect");
    let ignore = false;
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        if (!ignore) {
          console.log(res.data.products);
          setProducts(res.data.products.slice(0, 8));
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

  return <ProductBox products={products} />;
};

export default Featured;
