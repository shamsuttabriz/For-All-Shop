import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-112 lg:px-16 xl:px-24">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
