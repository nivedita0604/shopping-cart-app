import React, { createContext, useContext, useReducer } from 'react';

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const onCart = state.some(item => {
        return item.id === action.id;
      });

      return onCart
        ? state.map(item => {
            return item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          })
        : state.concat({ id: action.id, quantity: 1, price: action.price });
    }
    case 'DELETE_ITEM': {
      const onCart = state.some(item => {
        return item.id === action.id;
      });

      return onCart
        ? state.map(item => {
            return item.id === action.id
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          })
        : state;
    }

    case 'REMOVE_ALL': {
      return state.filter(item => {
        return item.id !== action.id;
      });
    }
    default:
      return state;
  }
}

const CartContext = createContext();
const DispatchCartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  return (
    <DispatchCartContext.Provider value={dispatchCart}>
      <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    </DispatchCartContext.Provider>
  );
};
export const useDispatchCart = () => {
  return useContext(DispatchCartContext);
};
export const useCart = () => {
  return useContext(CartContext);
};