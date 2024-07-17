import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface Game {
  id: number;
  name: string;
  picture: string;
  price: number;
}

interface CartContextType {
  cartItems: Game[];
  addToCartContext: (game: Game) => void;
  setCartItems: Dispatch<SetStateAction<Game[]>>;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCartContext: () => {},
  setCartItems: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Game[]>([]);

  const addToCartContext = (game: Game) => {
    setCartItems((prevItems) => [...prevItems, game]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCartContext, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext)
};