import React, { useState } from "react";
import styles from "./styles.module.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Filters = ({ categories, filterValueSelected }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [Index, seIndex] = useState(-1);
  const uniqueCategories = [...new Set(categories)];
  const FilterValue = (item, index) => {
    filterValueSelected(item);
    setIsClicked(true);
    seIndex(index);
  };
  return (
    <div className={styles.Filters}>
      <div className={styles.FiltersHeader}>
        <p className={styles.Title}>Filters</p>
        <p className={styles.Rest}>Reset</p>
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
                    <IoIosArrowUp  />
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
