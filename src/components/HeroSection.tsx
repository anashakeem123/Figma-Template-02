import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4 md:px-6 relative"
      id="hero"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/img1.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full flex items-center justify-center px-6">
        <div className="flex flex-col md:flex-row items-center w-full max-w-7xl">
          {/* Left Content (Image or Empty Space) */}
          <div className="hidden md:flex flex-1">
            <img
              src="/assets/image.jpg" /* Replace with your image path */
              alt="Decorative Furniture"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="relative z-10 bg-white p-6 md:p-8 shadow-lg max-w-sm md:max-w-md flex-1 md:ml-8 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Luxury homeware for people who love timeless design quality
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Shop the new Spring 2024 collection today
            </p>
            <Link
              href="/product"
              className="bg-gray-800 text-white py-2 px-4 md:px-6 rounded hover:bg-gray-700 transition-all"
            >
              VIEW COLLECTIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
