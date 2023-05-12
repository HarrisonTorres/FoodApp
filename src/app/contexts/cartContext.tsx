"use client";
import { createContext, useState, useEffect } from "react";
import { dados_lanches } from "../../../database/api_fake";
import { count } from "console";

export const CartContext = createContext({});

type CartItem = {
  image: string;
  category: number;
  alt_image: string;
  title_itens: string;
  descrition_from_itens: string;
  price: string;
  id: number;
  count: number;
};
interface ThemeProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [dados, setDados] = useState(dados_lanches);
  
  const quantityItens = cart.length;
  const addCart = (itemId: number) => {
    const selectItemForCart = dados.find((item) => item.id === itemId);

    if (selectItemForCart) {
      const updatedLanches = dados.filter((item) => item.id != itemId);
      setCart((prevCart) => [...prevCart, selectItemForCart]);      
    }
  };

  useEffect(() => {
    // Verifique se há algum dado persistido no armazenamento local
    const savedData = localStorage.getItem("myAppData");
    if (savedData) {
      setCart(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    // Salve os dados no armazenamento local sempre que o estado for atualizado
    localStorage.setItem("myAppData", JSON.stringify(cart));
  }, [cart]);

  const removeCart = (itemId: number) => {
    const updatedLanches = cart.filter((item) => item.id != itemId);
    if(updatedLanches){
      setCart(updatedLanches);
    }
  }

  const contextValue = {
    //Exports do contexto
    cart,
    setCart,
    addCart,
    quantityItens: cart.length,
    removeCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
