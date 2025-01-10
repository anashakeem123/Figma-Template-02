import React from "react";
import Header from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home;