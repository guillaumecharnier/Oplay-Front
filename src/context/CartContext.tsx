import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Game {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  editor: string;
  picture: string;
  price: number;
}

interface CartContextType {
  cartItems: Game[];
  addToCartContext: (game: Game) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCartContext: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Game[]>([]);

  const addToCartContext = (game: Game) => {
    setCartItems((prevItems) => [...prevItems, game]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCartContext }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext)
};