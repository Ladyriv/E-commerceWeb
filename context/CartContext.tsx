import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definición de la interfaz para los elementos del carrito
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// Definición del tipo del contexto del carrito
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  incrementQuantity: (id: number, quantity: number) => void;
  decrementQuantity: (item: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  getTotal: () => number;

}

// Creación del contexto del carrito
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Componente proveedor del contexto del carrito
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Función para agregar los items al carrito
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Función que permite incrementar la cantidad de un ítem
  const incrementQuantity = (id: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  // Función que permite eliminar la cantidad de un ítem
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  // Función para reducir la cantidad de un ítem
  const decrementQuantity = (itemId: number) => {
    setCart(prevCart =>
      prevCart
        .map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter(cartItem => cartItem.quantity > 0)
    );
  };

   // Función para obtener el total de los items 
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Provee el contexto a los componentes hijos
  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

//Custom hook para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


