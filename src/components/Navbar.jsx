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

      <div className="bg-white/80 backdrop-blur-md border border-pink-100 shadow-[0_8px_32px_rgba(236,72,153,0.1)] rounded-3xl px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">

          <img
            src={logo}
            alt="Soulfull Bites"
            className="h-12 w-12 object-contain group-hover:scale-110 transition"
          />

          <span className="text-xl font-black bg-linear-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
            Soulfull Bites
          </span>

        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative group">

          <div
            className={`flex items-center gap-2 px-5 py-2 rounded-2xl transition ${
              isActive("/cart")
                ? "bg-pink-500 text-white shadow-lg"
                : "bg-[#5D3A3A] text-white hover:bg-pink-600"
            }`}
          >
            <span className="text-lg group-hover:animate-bounce">🛒</span>
            <span className="hidden md:inline">My Basket</span>
          </div>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-400 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}

        </Link>

      </div>

    </nav>
    </div>
  );
}