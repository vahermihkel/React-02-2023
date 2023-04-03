import React, { createContext, useState } from 'react';

// Create a new context
export const CartSumContext = createContext();

// Create a provider for the context
export const CartSumContextProvider = ({ children }) => {
  const [cartSum, setCartSum] = useState(calculateCartSum());

  function calculateCartSum() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach(oneProduct => total = total + oneProduct.product.price * oneProduct.quantity);
    return total.toFixed(2);
  }

  // const updateMyState = (newValue) => {
  //   setCartSum(newValue);
  // };

  // Provide the state and updater function to the context
  const contextValue = {
    cartSum,
    setCartSum,
  };

  return (
    <CartSumContext.Provider value={contextValue}>
      {children}
    </CartSumContext.Provider>
  );
};
