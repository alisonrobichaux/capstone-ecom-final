import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart);

  }

  // clear cart
  const clearCart = ()=> {
    setCart([]);

  }

//increase amount
const increaseAmount = (id)=> {
  const item = cart.find(item => item.id === id);
  addToCart(item, id);
}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

