import { useReducer } from 'react';

const filterReducer = initialstate => {
  return (state, action) => {
    switch (action.type) {
      case 'DELIVERY': {
        return initialstate.filter(prod => {
          return prod.delivery;
        });
      }
      case 'INSTOCK': {
        return initialstate.filter(prod => {
          return prod.inStock;
        });
      }
      case 'PRICEHIGH': {
        return initialstate.filter(prod => {
          return prod.pricehigh;
        });
      }
      case 'PRICELOW': {
        return initialstate.filter(prod => {
          return prod.pricecheap;
        });
      }
      case 'RESET': {
        return { initialstate };
      }
      default:
        return { initialstate };
    }
  };
};

export const useFilter = initialstate => {
  const filter = filterReducer(initialstate);
  return useReducer(filter, initialstate);
};
