import { createSlice } from "@reduxjs/toolkit";
// Coffee:  price_1RPuCPRrgCXK45i3ORCWr8k4
// sunglass: price_1RPuDZRrgCXK45i3Stv44P7t
// camera: price_1RPuE9RrgCXK45i30LmuhOu2

const productsListSlice = createSlice({
  name: "productList",
  initialState: {
    products: [
      {
        id: "price_1RPuCPRrgCXK45i3ORCWr8k4",
        title: "Coffee",
        price: 4.99,
      },
      {
        id: "price_1RPuDZRrgCXK45i3Stv44P7t",
        title: "Sunglasses",
        price: 9.99,
      },
      {
        id: "price_1RPuE9RrgCXK45i30LmuhOu2",
        title: "Camera",
        price: 39.99,
      },
    ],
  },
  reducers: {
    getProductData(state, { payload }) {
      const data = state.products.find((product) => product.id === payload);
      return data;
    },
  },
});

export const { getProductData } = productsListSlice.actions;
export default productsListSlice.reducer;
