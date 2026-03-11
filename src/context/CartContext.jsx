/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product, option, price) => {

    const item = {
      name: product.name,
      img: product.img,
      option: option,
      price: price,
      qty: 1
    };

    setCart([...cart, item]);
  };

  const removeItem = (index) => {

    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}