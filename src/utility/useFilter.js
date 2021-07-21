import { useReducer } from 'react';

const filterReducer = initialstate => {
  return (state, action) => {
    switch (action.type) {
      case 'SET': {
        return { ...state, [action.filter]: action.value };
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
