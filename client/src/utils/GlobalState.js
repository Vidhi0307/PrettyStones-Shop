// TODO: Add a comment briefly describing the functionality of `useContext`
// Your comment here

import React, { createContext, useContext } from 'react';

// TODO: Add a comment describing the React hook that `useProductReducer` makes use of
// Your comment here

import { useProductReducer } from './reducers';



const StoreContext = createContext();

const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  
  return <Provider value={[state, dispatch]} {...props} />;
};

// TODO: Add a comment describing the purpose of our custom `useStoreContext` hook
// Your comment here
const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };