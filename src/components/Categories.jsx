// import { useState } from "react";
// import products from "../data/products";
// import ProductCard from "./ProductCard";

// export default function Categories() {
//   const cats = [
//     "All",
//     "Choco Pies",
//     "Ball & Heart Bites",
//     "Classic Cakes",
//     "Brownies",
//     "Jar Cakes",
//     "Pastries",
//     "Dream Cake Version 1",
//     "Dream Cake Version 2",
//     "Sandwiches",
//     "Bun Varieties"
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((cat) => cat.category === selectedCategory);

//   return (
//     <div className="max-w-7xl relative top-13 mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       {/* Title */}
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#5D3A3A]">
//         Our Sweet Menu
//       </h2>

//       {/* Category Buttons */}
//       <div className="sticky top-23 z-20 bg-white/90 backdrop-blur-md py-4 mb-6">
//         <div className="relative">
//           <div className="absolute left-0 top-0 h-full w-6 bg-linear-to-r from-white to-transparent pointer-events-none"></div>
//           <div className="flex gap-3 overflow-x-auto scrollbar-hide px-2">
//             {cats.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => handleCategoryClick(c)}
//                 className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition
//                   ${
//                     selectedCategory === c
//                       ? "bg-pink-500 text-white shadow-md"
//                       : "bg-pink-50 hover:bg-pink-100 text-gray-600"
//                   }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
//           <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-white to-transparent pointer-events-none"></div>
//         </div>
//       </div>

//       {/* Products */}
//       {filteredProducts.map((cat) => (
//         <div key={cat.category} className="mb-12">
//           <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#5D3A3A]">
//             {cat.category}
//           </h2>

//           {/* Check if subcategories exist */}
//           {cat.items[0].subCategory ? (
//             cat.items.map((sub, i) => (
//               <div key={i} className="mb-8">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#7A4B4B]">
//                   {sub.subCategory}
//                 </h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                   {sub.items.map((item, j) => (
//                     <ProductCard key={j} product={item} />
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//               {cat.items.map((item, i) => (
//                 <ProductCard key={i} product={item} />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }








// import { useState } from "react";
// import products from "../data/products";
// import ProductCard from "./ProductCard";

// export default function Categories() {
//   const cats = [
//     "All",
//     "Choco Pies",
//     "Ball & Heart Bites",
//     "Classic Cakes",
//     "Brownies",
//     "Jar Cakes",
//     "Pastries",
//     "Dream Cake Version 1",
//     "Dream Cake Version 2",
//     "Sandwiches",
//     "Bun Varieties"
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((cat) => cat.category === selectedCategory);

//   return (
//     <div className="max-w-7xl pt-24 mx-auto px-4 py-10">
//       {/* Title */}
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#5D3A3A]">
//         Our Sweet Menu
//       </h2>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden mb-6 flex justify-start">
//         <button
//           onClick={() => setMenuOpen(true)}
//           className="bg-pink-500 text-white px-5 py-2 rounded-xl shadow-md"
//         >
//           ☰ Categories
//         </button>
//       </div>

//       <div className="flex gap-10">
//         {/* Desktop Sidebar */}
//         <div className="hidden md:block w-64 sticky top-28 h-fit">
//           <div className="bg-white rounded-2xl shadow-md p-5">
//             <h3 className="text-lg font-bold mb-4 text-[#5D3A3A]">
//               Categories
//             </h3>
//             <div className="flex flex-col gap-2">
//               {cats.map((c) => (
//                 <button
//                   key={c}
//                   onClick={() => setSelectedCategory(c)}
//                   className={`text-left px-4 py-2 rounded-lg transition
//                     ${
//                       selectedCategory === c
//                         ? "bg-pink-500 text-white"
//                         : "hover:bg-pink-50 text-gray-600"
//                     }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Products */}
//         <div className="flex-1">
//           {filteredProducts.map((cat) => (
//             <div key={cat.category} className="mb-12">
//               <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#5D3A3A]">
//                 {cat.category}
//               </h2>

//               {/* Check if category has subcategories */}
//               {cat.items[0].subCategory ? (
//                 cat.items.map((sub, i) => (
//                   <div key={i} className="mb-8">
//                     <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#7A4B4B]">
//                       {sub.subCategory}
//                     </h3>
//                     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                       {sub.items.map((item, j) => (
//                         <ProductCard key={j} product={item} />
//                       ))}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//                   {cat.items.map((item, i) => (
//                     <ProductCard key={i} product={item} />
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Slide Sidebar */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50 flex">
//           {/* Overlay */}
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setMenuOpen(false)}
//           ></div>

//           {/* Sidebar */}
//           <div className="relative bg-white w-64 h-full p-5 shadow-xl">
//             <div className="flex justify-between items-center mb-5">
//               <h3 className="text-lg font-bold text-[#5D3A3A]">Categories</h3>
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="text-xl"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="flex flex-col gap-2">
//               {cats.map((c) => (
//                 <button
//                   key={c}
//                   onClick={() => {
//                     setSelectedCategory(c);
//                     setMenuOpen(false);
//                   }}
//                   className={`text-left px-4 py-2 rounded-lg transition
//                     ${
//                       selectedCategory === c
//                         ? "bg-pink-500 text-white"
//                         : "hover:bg-pink-50 text-gray-600"
//                     }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






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
    "Dream Cake Version 2",
    "Sandwiches",
    "Bun Varieties"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((cat) => cat.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl relative top-14 mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#F5E6C8]">
          Our Sweet Menu
        </h2>

        {/* Category Buttons */}
        <div className="sticky top-24 z-20 bg-black/90 backdrop-blur-md py-4 mb-8 border-y border-[#4B2E2B]">

          <div className="relative">

            <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-2">

              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => handleCategoryClick(c)}
                  className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-300
                    ${
                      selectedCategory === c
                        ? "bg-[#C9A227] text-black shadow-lg"
                        : "bg-[#1a1a1a] hover:bg-[#4B2E2B] text-[#F5E6C8]"
                    }`}
                >
                  {c}
                </button>
              ))}

            </div>

            <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          </div>
        </div>

        {/* Products */}
        {filteredProducts.map((cat) => (
          <div key={cat.category} className="mb-14">

            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#C9A227]">
              {cat.category}
            </h2>

            {/* Subcategories */}
            {cat.items[0].subCategory ? (
              cat.items.map((sub, i) => (
                <div key={i} className="mb-10">

                  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#F5E6C8]">
                    {sub.subCategory}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                    {sub.items.map((item, j) => (
                      <ProductCard key={j} product={item} />
                    ))}
                  </div>

                </div>
              ))
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                {cat.items.map((item, i) => (
                  <ProductCard key={i} product={item} />
                ))}
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}