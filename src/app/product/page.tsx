'use client';

import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { useState } from 'react';
import Footer from "@/components/Footer";

const relatedProducts = [
  { id: 1, name: "The Dandy Chair", price: "250", image: "/assets/chair.jpg" },
  { id: 2, name: "Rustic Vase Set", price: "155", image: "/assets/vase.jpg" },
  { id: 3, name: "The Silky Vase", price: "125", image: "/assets/silkyvase.jpg" },
  { id: 4, name: "The Lucy Lamp", price: "399", image: "/assets/lamp.jpg" },
];

export default function ProductPage() {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) setAmount(value);
  };

  const addToCart = () => {
    console.log(`Added ${amount} of The Dandy Chair to cart`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          {/* Product Image */}
          <div className="bg-gray-100 p-4 flex items-center justify-center">
            <Image
              src="/assets/chair2.png"
              alt="The Dandy Chair"
              width= {600}
              height={759}
             className="object-contain w-[600px] h-[600px]"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">The Dandy Chair</h1>
            <p className="text-2xl font-semibold text-gray-700 mb-6">£250</p>

            <h2 className="text-lg font-light  text-gray-700 mb-2">Description</h2>
            <p className="text-gray-600 mb-6">
            A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>

            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>

            <h2 className="text-lg font-light  text-gray-700 mb-2">Dimensions</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="font-medium">Height:</p>
                <p className=" font-light  text-gray-700 ">110cm</p>
              </div>
              <div>
                <p className="font-medium">Width:</p>
                <p className=" font-light  text-gray-700 ">75cm</p>
              </div>
              <div>
                <p className="font-medium">Depth:</p>
                <p className=" font-light  text-gray-700 ">50cm</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="amount" className="font-medium">Amount:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
                className="w-20 border px-2 py-1"
                min="1"
              />
            </div>

            <button
              onClick={addToCart}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(({ id, name, price, image }) => (
              <div key={id} className="group">
                <div className="mb-4 overflow-hidden bg-gray-50 h-[350px]">
                  <Image
                    src={image}
                    alt={name}
                    width={350}
                    height={350}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{name}</h3>
                <p className="text-gray-600">£{price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}