import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Bags = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bags;
