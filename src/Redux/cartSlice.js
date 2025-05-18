import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addOneToCart(state, action) {
      const product = state.items.find(
        (item) => item.id === Number(action.payload.id)
      );
      console.log(action);
      if (!product) {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      } else {
        product.quantity++;
      }
      state.total = state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      state.total.toFixed(2);
    },
    removeOneFromCart(state, action) {
      const product = state.items.find((item) => item.id === action.payload);
      if (!product) {
        return;
      }
      if (product.quantity === 1) {
        product.quantity--;
        state.items = state.items.filter((item) => item.id != action.payload);
      } else {
        product.quantity--;
      }
      state.total = state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      state.total.toFixed(2);
    },
    deleteFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      console.log(action);
      state.total = state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      state.total.toFixed(2);
    },
  },
});

export const {
  addOneToCart,
  getProductQuantity,
  removeOneFromCart,
  deleteFromCart,
  getTotalCost,
} = cartSlice.actions;
export default cartSlice.reducer;
