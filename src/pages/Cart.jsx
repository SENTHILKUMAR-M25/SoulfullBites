// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import CheckoutForm from "../components/CheckoutForm";

// export default function Cart() {
//   const { cart, removeItem } = useContext(CartContext);
//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
//         <div className="text-6xl mb-4 text-pink-200">🍪</div>
//         <h1 className="text-2xl font-bold text-gray-800">Your basket is empty</h1>
//         <p className="text-gray-500 mt-2">Looks like you haven't added any sweet bites yet!</p>
//         <button className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-full font-bold">Go Back to Menu</button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#FFF9F9] min-h-screen py-10 px-4">
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
        
//         {/* Left Side: Cart Items (3 Columns) */}
//         <div className="lg:col-span-3">
//           <h1 className="text-3xl font-black text-[#5D3A3A] mb-8 flex items-center gap-3">
//             Your Basket <span className="text-pink-400 text-lg">({cart.length})</span>
//           </h1>

//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div key={index} className="bg-white p-5 rounded-3xl shadow-sm border border-pink-50 flex items-center justify-between group transition-all hover:shadow-md">
//                 <div className="flex items-center gap-4">
//                   <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl">🍰</div>
//                   <div>
//                     <p className="font-bold text-gray-800">{item.name}</p>
//                     <p className="text-sm text-pink-500 font-medium uppercase tracking-wider">{item.option}</p>
//                   </div>
//                 </div>

//                 <div className="text-right">
//                   <p className="font-black text-[#5D3A3A] text-lg">₹{item.price}</p>
//                   <button 
//                     onClick={() => removeItem(index)}
//                     className="text-xs text-red-400 font-bold uppercase tracking-tighter hover:text-red-600 transition-colors"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 p-6 bg-[#5D3A3A] rounded-[2.5rem] text-white flex justify-between items-center shadow-xl">
//              <div>
//                 <p className="text-pink-200 text-sm font-bold uppercase">Subtotal</p>
//                 <p className="text-3xl font-black">₹{total}</p>
//              </div>
//              <div className="text-right opacity-80 text-sm italic">
//                 Sweetness is <br /> on the way!
//              </div>
//           </div>
//         </div>

//         {/* Right Side: Checkout Form (2 Columns) */}
//         <div className="lg:col-span-2">
//           <CheckoutForm cart={cart} />
//         </div>

//       </div>
//     </div>
//   );
// }






import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";

export default function Cart() {

  const { cart, removeItem } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-black">
        
        <div className="text-6xl mb-4">🍪</div>

        <h1 className="text-2xl font-bold text-[#F5E6C8]">
          Your basket is empty
        </h1>

        <p className="text-[#C9A227]/70 mt-2">
          Looks like you haven't added any sweet bites yet!
        </p>

        <button className="mt-6 bg-[#C9A227] text-black px-8 py-3 rounded-full font-bold hover:bg-[#d4af37] transition">
          Go Back to Menu
        </button>

      </div>
    );
  }

  return (

    <div className="bg-[#121212]  min-h-screen py-28 px-4">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-3">

          <h1 className="text-3xl font-black text-[#F5E6C8] mb-8 flex items-center gap-3">
            Your Basket 
            <span className="text-[#C9A227] text-lg">
              ({cart.length})
            </span>
          </h1>

          <div className="space-y-4">

            {cart.map((item, index) => (

              <div
                key={index}
                className="bg-[#1a1a1a] p-5 rounded-3xl border border-[#4B2E2B] flex items-center justify-between hover:shadow-xl transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 bg-[#4B2E2B] rounded-2xl flex items-center justify-center text-2xl">
                    🍰
                  </div>

                  <div>
                    <p className="font-bold text-[#F5E6C8]">
                      {item.name}
                    </p>

                    <p className="text-sm text-[#C9A227] font-medium uppercase tracking-wider">
                      {item.option}
                    </p>
                  </div>

                </div>

                <div className="text-right">

                  <p className="font-black text-[#F5E6C8] text-lg">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() => removeItem(index)}
                    className="text-xs text-red-400 font-bold uppercase hover:text-red-600 transition"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Total Box */}

          <div className="mt-8 p-6 bg-[#1a1a1a] border border-[#C9A227] rounded-[2rem] text-[#F5E6C8] flex justify-between items-center shadow-xl">

            <div>

              <p className="text-[#C9A227] text-sm font-bold uppercase">
                Subtotal
              </p>

              <p className="text-3xl font-black">
                ₹{total}
              </p>

            </div>

            <div className="text-right opacity-80 text-sm italic">
              Sweetness is <br /> on the way!
            </div>

          </div>

        </div>

        {/* Checkout Form */}

        <div className="lg:col-span-2">
          <CheckoutForm cart={cart} />
        </div>

      </div>

    </div>

  );

}