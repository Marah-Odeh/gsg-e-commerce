import React, { useState } from "react";
import styles from "./styles.module.css";
const QuantityCounter = () => {
  const initialCounterValue = 0;
  const [counter, setCount] = useState(initialCounterValue);

  return (
    
      <div className={styles.CounterItems}>
        <button
          onClick={() => {
            setCount(counter + 1);
          }}
          className={styles.IncCounter}
        >
          +
        </button>
        <p className={styles.QuantityValue}>{counter}</p>
        <button
          onClick={() => {
            counter > 0 ? setCount(counter - 1) : setCount(0);
          }}
          className={styles.DecCounter}
        >
          -
        </button>
      </div>
 
  );
};

export default QuantityCounter;
