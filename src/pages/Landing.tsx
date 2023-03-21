import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";

const Landing = () => {
  return (
    <div className="bg-[#FCFCFD]">
      <Header />
      <Banner />
      <Features />
    </div>
  );
};

export default Landing;
