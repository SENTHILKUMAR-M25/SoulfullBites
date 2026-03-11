import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">

      {/* Image */}

      <div className="h-48 overflow-hidden">

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

      </div>

      {/* Content */}

      <div className="p-4">

        <h3 className="font-semibold text-lg text-[#5D3A3A]">
          {product.name}
        </h3>

        {/* Single Price */}

        {product.price && (

          <button
            onClick={() => addToCart(product, "default", product.price)}
            className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-medium transition"
          >

            Add ₹{product.price}

          </button>

        )}

        {/* Multiple Prices */}

        {product.prices &&
          Object.entries(product.prices).map(([key, value]) => (

            <button
              key={key}
              onClick={() => addToCart(product, key, value)}
              className="mt-2 w-full border border-pink-300 text-pink-600 hover:bg-pink-50 py-2 rounded-lg font-medium transition"
            >

              {key} ₹{value}

            </button>

          ))}

      </div>

    </div>

  );

}