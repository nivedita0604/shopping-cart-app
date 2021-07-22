import { useReducer } from 'react';

const filterReducer = initialState => {
  return (state, action) => {
    switch (action.type) {
      case 'SET': {
        return { ...state, [action.filterName]: action.value };
      }

      case 'RESET':
        return initialState;

      default:
        return state;
    }
  };
};

export const useFilter = initialstate => {
  const filter = filterReducer(initialstate);
  return useReducer(filter, initialstate);
};
