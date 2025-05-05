import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="bg-red-400 min-h-[calc(100vh-116px)]">ErrorPage</div>
      <Footer />
    </>
  );
}

export default ErrorPage;
