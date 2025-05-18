import { configureStore } from "@reduxjs/toolkit";
import productsListSlice from "./productsListSlice";
import cartItemsSlice from "./cartSlice";
const store = configureStore({
  reducer: { productsList: productsListSlice, cartItems: cartItemsSlice },
});

export default store;
