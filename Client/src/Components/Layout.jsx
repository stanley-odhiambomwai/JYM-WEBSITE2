// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
