// import { Link, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import logo from "../assets/logo.png";

// export default function Navbar() {

//   const location = useLocation();
//   const { cart } = useContext(CartContext);

//   const isActive = (path) => location.pathname === path;

//   const cartCount = cart.reduce((total, item) => total + (item.qty || 1), 0);

//   return (
//     <div className="h-full w-full bg-black">
//     <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">

//       <div className=" backdrop-blur-md border border-pink-100 shadow-[0_8px_32px_rgba(236,72,153,0.1)] rounded-3xl px-6 py-3 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-3 group">

//           <img
//             src={logo}
//             alt="Soulfull Bites"
//             className="h-12 w-12 object-contain group-hover:scale-110 transition"
//           />

//           <span className="text-xl font-black bg-linear-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
//             Soulfull Bites
//           </span>

//         </Link>

//         {/* Cart */}
//         <Link to="/cart" className="relative group">

//           <div
//             className={`flex items-center gap-2 px-5 py-2 rounded-2xl transition ${
//               isActive("/cart")
//                 ? "bg-pink-500 text-white shadow-lg"
//                 : "bg-[#5D3A3A] text-white hover:bg-pink-600"
//             }`}
//           >
//             <span className="text-lg group-hover:animate-bounce">🛒</span>
//             <span className="hidden md:inline">My Basket</span>
//           </div>

//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
//               {cartCount}
//             </span>
//           )}

//         </Link>

//       </div>

//     </nav>
//     </div>
//   );
// }



import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";

export default function Navbar() {

  const location = useLocation();
  const { cart } = useContext(CartContext);

  const isActive = (path) => location.pathname === path;

  const cartCount = cart.reduce((total, item) => total + (item.qty || 1), 0);

  return (
    <div className="h-full w-full bg-black">
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">

        <div className="backdrop-blur-md border border-[#C9A227]/30 shadow-[0_8px_32px_rgba(201,162,39,0.2)] rounded-3xl px-6 py-3 flex justify-between items-center bg-[#1a1a1a]/80">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">

            <img
              src={logo}
              alt="Soulfull Bites"
              className="h-20 w-20 object-contain group-hover:scale-110 transition"
            />

            <span className="hidden md:inline text-xl font-black bg-linear-to-r from-[#C9A227] to-[#F5E6C8] bg-clip-text text-transparent">
              Soulfull Bites
            </span>

          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative group">

            <div
              className={`flex items-center gap-2 px-5 py-2 rounded-2xl transition ${
                isActive("/cart")
                  ? "bg-[#C9A227] text-black shadow-lg"
                  : "bg-[#4B2E2B] text-[#F5E6C8] hover:bg-[#C9A227] hover:text-black"
              }`}
            >
              <span className="text-lg group-hover:animate-bounce">🛒</span>
              <span className="hidden md:inline font-medium">My Basket</span>
            </div>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#C9A227] text-black text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                {cartCount}
              </span>
            )}

          </Link>

        </div>

      </nav>
    </div>
  );
}