import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ProductsContainer from "./ProductsContainer";
import styles from "./styles.module.css";
import SortBar from "../SortBar";
import axios from "axios";
import Loading from "./LoadingButton";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [itemsNumber, setItemsNumber] = useState(12);
  const [fullFlag, setFullFlag] = useState(false);
  useEffect(() => {
    console.log("inside use effect");
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
        setProductList(res.data.products.slice(0, 12));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const categories = products.map((x) => x.category);

  const OnFilterValueSelected = (filterValue) => {
    setFullFlag(true);
    const FilteredList = [...products].filter(
      (x) => x.category === filterValue
    );
    setProductList(FilteredList);
  };

  const OnSortSelected = (target) => {
    console.log(target);
    if (target === "price") {
      const sortedArray = [...ProductList].sort((a, b) => a.price - b.price);
      setProductList(sortedArray);
    } else if (target === "title") {
      const nameSortedArray = [...ProductList].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProductList(nameSortedArray);
    }
  };

  const LoadingMoreProducts = () => {
    setItemsNumber(itemsNumber + 9);
    let sliceArray = [...products].slice(0, itemsNumber + 9);
    setProductList(sliceArray);
    console.log(sliceArray.length);
    if (sliceArray.length === products.length) {
      setFullFlag(true);
    }
  };

  return (
    <>
      <SortBar OnSortSelected={OnSortSelected} />
      <div className={styles.ProductsListContainer}>
        <Filters
          categories={categories}
          filterValueSelected={OnFilterValueSelected}
        />
        <ProductsContainer products={ProductList} />
      </div>
      <Loading LoadingMoreProducts={LoadingMoreProducts} Full={fullFlag} />
    </>
  );
};

export default ProductsListContainer;
