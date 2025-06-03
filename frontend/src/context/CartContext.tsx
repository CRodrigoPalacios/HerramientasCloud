import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Tipo de producto que se agrega al carrito
export interface CartItem {
  _id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

// Tipos de acciones para el carrito
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string } // id del producto
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };

// Tipo del estado
type CartState = CartItem[];

// Contexto con estado y dispatch
interface CartContextType {
  cartItems: CartItem[];
  dispatch: React.Dispatch<CartAction>;
}

// Crear contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer del carrito
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item._id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item._id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

// Proveedor
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};
