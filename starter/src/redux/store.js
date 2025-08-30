import { configureStore } from '@reduxjs/toolkit';
//import CartReducer from './store/CartSlice';
import CartReducer from "./Slices/CartSlice"

export const store = configureStore({
  reducer: {
    //CartReducer: CartReducer, 
    cart: CartReducer,
  }
});
