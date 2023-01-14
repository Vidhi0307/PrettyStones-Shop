import {userReducer} from 'react';

import {ADD_TO_CART} from './actions';

const initialState = {
   
    cart: [],
    cartOpen: false
  }

 export const reducers = (state=initialState, action) => {
    switch (action.type) {
      
  
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
  
      default:
        return state;
    }
  };
  
  export default reducers;