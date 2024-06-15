import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  const addToCart = (item, amount) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += amount;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: amount }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const addAmount = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const minAmount = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    const calculateTotalBill = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalBill(total);
    };

    calculateTotalBill();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, addAmount, minAmount, totalBill }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;