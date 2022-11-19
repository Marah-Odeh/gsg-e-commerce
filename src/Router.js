import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./views/HomePage";
import ProductsList from "./views/ProductsList";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
