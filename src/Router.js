import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import HomePage from "./views/HomePage";
import ProductsList from "./views/ProductsList";
import ProductDetails from "./views/ProductDetails";
import Error404Page from "./components/Error404Page";
import ProductsDataProvider from "./context/ProductsDataContext";
import JournalPage from "./views/JournalPage";
import AboutPage from "./views/AboutPage";
import FabricPage from "./views/FabricPage";
import WishListContext from "./context/WishListContext";
const Router = () => {
  return (
    <ProductsDataProvider>
      <ShoppingCartProvider>
        <WishListContext>
          <BrowserRouter>
            <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductsList />} />
                <Route
                  path={"/productDetails/:productId"}
                  element={<ProductDetails />}
                />
                <Route path="/fabric" element={<FabricPage />} />

                <Route path="/journal" element={<JournalPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Route>
              <Route path="*" element={<Error404Page />} />
            </Routes>
          </BrowserRouter>
        </WishListContext>
      </ShoppingCartProvider>
    </ProductsDataProvider>
  );
};

export default Router;
