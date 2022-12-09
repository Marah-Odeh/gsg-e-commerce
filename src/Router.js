import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import HomePage from "./views/HomePage";
import ProductsList from "./views/ProductsList";
import ProductDetails from "./views/ProductDetails";
const Router = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
        <Route path={"/login"} element={<Login />} />
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path={"/productDetails/:productId"} element={<ProductDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default Router;
