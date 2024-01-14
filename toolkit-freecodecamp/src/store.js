import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import modelSlice from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    model: modelSlice,
  },
});
