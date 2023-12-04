import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './orderSlice';

export const store = configureStore({
  reducer: {
    orderApp:orderReducer
  },
});