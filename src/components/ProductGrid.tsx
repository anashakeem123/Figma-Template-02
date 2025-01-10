
"use client"; // This makes it a Client Component

import React, { useState, useEffect } from "react";
import Link from "next/link";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "The Dandy Chair", price: "250", image: "/assets/chair.jpg" },
    { id: 2, name: "Rustic Vase Set", price: "155", image: "/assets/vase.jpg" },
    { id: 3, name: "The Silky Vase", price: "125", image: "/assets/silkyvase.jpg" },
    { id: 4, name: "The Lucy Lamp", price: "399", image: "/assets/lamp.jpg" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2
        className={`text-3xl md:text-4xl font-serif text-center mb-16 font-clash transition-all duration-700 ease-out  hover:text-gray-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        What makes our brand different
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`transition-all duration-500 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="border-0 shadow-none group">
              <div className="aspect-square relative overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-clash font-medium text-lg">{product.name}</h3>
              <p className="text-muted-foreground mb-3">&pound;{product.price}</p>
              <Link href="/cart"
                className="w-full transition-transform duration-200 hover:scale-105 active:scale-95 border border-gray-300 py-2 px-4"
              >
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`text-center mt-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        <Link href="/product"
          className="font-clash transition-transform duration-200 hover:scale-105 active:scale-95 border border-gray-300 py-2 px-6 " 


        >
          View collection
        </Link>
      </div>
    </section>
  );
};

export default ProductGrid;