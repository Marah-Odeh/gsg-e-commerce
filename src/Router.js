import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddsBar from "./components/AddsBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import ProductsList from "./views/ProductsList";

const Router = () => {
  return (
    <>
      <AddsBar />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductsList/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Router;
