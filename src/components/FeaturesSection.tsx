
import React from "react";


const FeaturesSection = () => {
  const features = [
    {
      icon: "🚚",
      title: "Next Day as Standard",
      description: "Order before 3pm and get your order the next day as standard"
    },
    {
      icon: "🎨",
      title: "Made by Artisans",
      description: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
      icon: "💰",
      title: "Unbeatable Prices",
      description:" For our materials and quality you won’t find better prices anywhere"
    },
    {
      icon: "♻️",
      title: "Recycled Packaging",
      description: "We use 100% recycled to ensure our footprint is more manageable"
    }
  ];

  return (
    <section className="w-full bg-white py-8 px-4 md:py-12 md:px-6" id="features">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8  hover:text-gray-500">
        What makes our brand different
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm"
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-4">{feature.icon}</div>
            <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h4>
            <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;