import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Filters = ({
  categories,
  filterValueSelected,
  setFilteredValue,
  reset,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [Index, seIndex] = useState(-1);
  const uniqueCategories = [...new Set(categories)];
  const FilterValue = (item, index) => {
    filterValueSelected(item);
    setIsClicked(true);
    seIndex(index);
  };
  const handleRest = () => {
    reset();
    setIsClicked(false);
    setFilteredValue("");
  };

  return (
    <div className={styles.Filters}>
      <div className={styles.FiltersHeader}>
        <p className={styles.Title}>Filters</p>
        <a className={styles.Rest} onClick={handleRest}>
          Reset
        </a>
      </div>
      <div className={styles.Categories}>
        <div className={styles.ProductsBox}>
          {uniqueCategories.map((item, index) => {
            return (
              <a
                onClick={() => {
                  FilterValue(item, index);
                }}
              >
                <div className={styles.CategoryItem}>
                  <p className={styles.CategoryName}>{item}</p>{" "}
                  {Index === index && isClicked ? (
                    <IoIosArrowDown color="#FF6008" />
                  ) : (
                    <IoIosArrowUp />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
