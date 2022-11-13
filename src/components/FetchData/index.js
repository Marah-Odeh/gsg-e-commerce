import axios from "axios";
import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("inside use effect");
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return <></>;
};

export default FetchData;
