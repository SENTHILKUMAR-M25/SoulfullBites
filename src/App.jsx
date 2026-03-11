import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";
import './App.css'
import Categories from "./components/Categories";
function App() {

  return (
    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories/>} />

        </Routes>

        <Footer />

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;