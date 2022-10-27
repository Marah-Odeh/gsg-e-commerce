import React, { useState } from "react";
import styles from "./styles.module.css";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

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
         <AiOutlinePlus/>
        </button>
        <p className={styles.QuantityValue}>{counter}</p>
        <button
          onClick={() => {
            counter > 0 ? setCount(counter - 1) : setCount(0);
          }}
          className={styles.DecCounter}
        >
         <AiOutlineMinus/>
        </button>
      </div>
 
  );
};

export default QuantityCounter;
