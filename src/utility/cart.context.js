import React, { createContext, useContext, useEffect, useReducer } from 'react';

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
const LOCAL_STORAGE_KEY = 'shopping_cart';
export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, [], initialValue => {
    const persistedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    return persistedValue ? JSON.parse(persistedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);
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
