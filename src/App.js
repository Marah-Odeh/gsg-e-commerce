import styles from "./App.module.css";
import React from "react";
import HomePage from "./views/HomePage";
import ProductsList from "./views/ProductsList";
import FetchData from "./components/FetchData";
import Router from "./Router";

const App = () => {
  return (
    <div className={styles.App}>
    <Router/>
    </div>
  );
};

export default App;
