import React, { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const QuantityCounter = ({
  id,
  getItemQuantity,
  increaseCartQuantity,
  decreaseCartQuantity,
}) => {
  const initialCounterValue = 0;
  const quantity = getItemQuantity(id);
  return (
    <div className={styles.CounterItems}>
      <button
        onClick={() => {
          increaseCartQuantity(id);
        }}
        className={styles.IncCounter}
      >
        <AiOutlinePlus />
      </button>
      <p className={styles.QuantityValue}>{quantity}</p>
      <button
        onClick={() => {
          decreaseCartQuantity(id);
        }}
        className={styles.DecCounter}
      >
        <AiOutlineMinus />
      </button>
    </div>
  );
};

export default QuantityCounter;
