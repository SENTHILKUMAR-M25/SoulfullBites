import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Categories() {

  const cats = [
    "All",
    "Choco Pies",
    "Ball & Heart Bites",
    "Classic Cakes",
    "Brownies",
    "Jar Cakes",
    "Pastries",
    "Dream Cake Version 1",
    "Dream Cake Version 2"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((cat) => cat.category === selectedCategory);

  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Title */}

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#5D3A3A]">
        Our Sweet Menu
      </h2>

      {/* Category Buttons */}

      <div className="sticky top-23 z-20 bg-white/90 backdrop-blur-md py-4 mb-6">

        <div className="flex gap-3 overflow-x-auto scrollbar-hide">

          {cats.map((c) => (

            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition
${selectedCategory === c
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-pink-50 hover:bg-pink-100 text-gray-600"
                }`}
            >

              {c}

            </button>

          ))}

        </div>

      </div>

      {/* Products */}

      {filteredProducts.map((cat) => (

        <div key={cat.category} className="mb-12">

          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#5D3A3A]">
            {cat.category}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

            {cat.items.map((item, i) => (
              <ProductCard key={i} product={item} />
            ))}

          </div>

        </div>

      ))}

    </div>

  );
}