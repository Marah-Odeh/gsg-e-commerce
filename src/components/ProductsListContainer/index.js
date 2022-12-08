import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ProductsContainer from "./ProductsContainer";
import styles from "./styles.module.css";
import SortBar from "../SortBar";
import axios from "axios";
import Loading from "./LoadingButton";
import ProductBanner from "../ProductBanner";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [itemsNumber, setItemsNumber] = useState(12);
  const [fullFlag, setFullFlag] = useState(false);
  const [targetValue, setTargetValue] = useState("title");
  const [filteredValue, setFilteredValue] = useState("");
  const [AllProducts, setAllProducts] = useState([]);
  useEffect(() => {
    console.log("inside use effect");
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

  useEffect(() => {
    setAllProducts(products);
    const slice = products
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(0, 12);
    setProductList(slice);
  }, [products]);

  const categories = products.map((x) => x.category);
  const OnFilterValueSelected = (filterValue) => {
    let FilteredList;
    setFilteredValue(filterValue);
    if (targetValue === "price") {
      FilteredList = [...products]
        .filter((x) => x.category === filterValue)
        .sort((a, b) => a.price - b.price);
    } else if (targetValue === "title") {
      FilteredList = [...products]
        .filter((x) => x.category === filterValue)
        .sort((a, b) => a.title.localeCompare(b.title));
    }
    setAllProducts(FilteredList);
    setProductList(FilteredList.slice(0, 12));
  };

  const OnSortSelected = (target) => {
    console.log(target);
    setTargetValue(target);
    if (target === "price") {
      const sortedArray = [...AllProducts].sort((a, b) => a.price - b.price);
      setAllProducts(sortedArray);
      setProductList(sortedArray.slice(0, 12));
    } else if (target === "title") {
      const nameSortedArray = [...AllProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setAllProducts(nameSortedArray);
      setProductList(nameSortedArray.slice(0, 12));
    }
  };

  const LoadingMoreProducts = () => {
    setItemsNumber(itemsNumber + 9);
    let sliceArray;
    targetValue === "price"
      ? (sliceArray = [...AllProducts]
          .slice(0, itemsNumber + 9)
          .sort((a, b) => a.price - b.price))
      : (sliceArray = [...AllProducts]
          .slice(0, itemsNumber + 9)
          .sort((a, b) => a.title.localeCompare(b.title)));
    setProductList(sliceArray);
    console.log(sliceArray.length);
    if (sliceArray.length === AllProducts.length) {
      setFullFlag(true);
    }
  };
  useEffect(() => {
    ProductList.length === AllProducts.length
      ? setFullFlag(true)
      : setFullFlag(false);
  }, [AllProducts]);

  return (
    <>
      <ProductBanner products={products} filteredValue={filteredValue} />
      <SortBar OnSortSelected={OnSortSelected} filteredValue={filteredValue} />
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
