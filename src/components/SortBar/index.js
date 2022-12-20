import React from "react";
import styles from "./styles.module.css";
import { IoIosArrowForward } from "react-icons/io";
const SortBar = ({ OnSortSelected, filteredValue }) => {
  const options = [
    {
      label: "Title",
      value: "title",
    },
    {
      label: "Price",
      value: "price",
    },
  ];
  const handleSort = (e) => {
    console.log(e.target.value);
    OnSortSelected(e.target.value);
  };
  return (
    <div className={styles.SortBar}>
      <div className={styles.CategoryTitle}>
        Category <IoIosArrowForward /> {filteredValue}
      </div>

      <div className={styles.SortedContainer}>
        <p className={styles.SortByTitle}>Sort by</p>
        <select
          className={styles.Selector}
          onChange={(e) => {
            handleSort(e);
          }}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortBar;
