import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import AddsBar from "../AddsBar";

const Layout = () => {
  return (
    <>
      <AddsBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
