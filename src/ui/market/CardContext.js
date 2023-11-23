// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(currentItems => [...currentItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== product.id));
  }
  // Add more cart functionalities as needed

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
