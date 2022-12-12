import styles from "./App.module.css";
import React from "react";
import Router from "./Router";

const App = () => {
  return (
    <div className={styles.App}>
      <Router />
    </div>
  );
};

export default App;
