import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cardSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
