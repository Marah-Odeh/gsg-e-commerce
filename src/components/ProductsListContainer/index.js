import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ProductsContainer from "./ProductsContainer";
import styles from "./styles.module.css";
import SortBar from "../SortBar";
import Loading from "./LoadingButton";
import ProductBanner from "../ProductBanner";
import { useProductsData } from "../../context/ProductsDataContext";
const ItemsNumberOnStart = 12;
const ItemsNumberOnAddition = 9;
const ProductsListContainer = () => {
  const [ProductList, setProductList] = useState([]);
  const [itemsNumber, setItemsNumber] = useState(ItemsNumberOnStart);
  const [fullFlag, setFullFlag] = useState(false);
  const [targetValue, setTargetValue] = useState("title");
  const [filteredValue, setFilteredValue] = useState("");
  const [AllProducts, setAllProducts] = useState([]);
  const { products } = useProductsData();

  useEffect(() => {
    const Array = [...products].sort((a, b) => a.title.localeCompare(b.title));
    setAllProducts(Array);
    setProductList(Array.slice(0, ItemsNumberOnStart));
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
    setProductList(FilteredList.slice(0, ItemsNumberOnStart));
  };

  const OnSortSelected = (target) => {
    console.log(target);
    setTargetValue(target);
    if (target === "price") {
      const sortedArray = [...AllProducts].sort((a, b) => a.price - b.price);
      setAllProducts(sortedArray);
      setProductList(sortedArray.slice(0, ItemsNumberOnStart));
    } else if (target === "title") {
      const nameSortedArray = [...AllProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setAllProducts(nameSortedArray);
      setProductList(nameSortedArray.slice(0, ItemsNumberOnStart));
    }
  };

  const LoadingMoreProducts = () => {
    setItemsNumber(itemsNumber + ItemsNumberOnAddition);
    let sliceArray;
    targetValue === "price"
      ? (sliceArray = [...AllProducts]
          .slice(0, itemsNumber + ItemsNumberOnAddition)
          .sort((a, b) => a.price - b.price))
      : (sliceArray = [...AllProducts]
          .slice(0, itemsNumber + ItemsNumberOnAddition)
          .sort((a, b) => a.title.localeCompare(b.title)));
    setProductList(sliceArray);
    console.log(sliceArray.length);
    if (sliceArray.length === AllProducts.length) {
      setFullFlag(true);
    }
  };

  const reset = () => {
    let Array;
    if (targetValue === "price") {
      Array = [...products].sort((a, b) => a.price - b.price);
    } else if (targetValue === "title") {
      Array = [...products].sort((a, b) => a.title.localeCompare(b.title));
    }
    setAllProducts(Array);
    let slice = Array.slice(0, ItemsNumberOnStart);
    setProductList(slice);
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
          reset={reset}
          setFilteredValue={setFilteredValue}
        />
        <ProductsContainer products={ProductList} />
      </div>
      <Loading LoadingMoreProducts={LoadingMoreProducts} Full={fullFlag} />
    </>
  );
};
export default ProductsListContainer;
