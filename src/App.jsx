

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

import CartProvider from "./context/CartContext";
import Categories from "./components/Categories";

import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <CartProvider>
      <ScrollToTop />

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;