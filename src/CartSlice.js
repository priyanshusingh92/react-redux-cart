import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: { items: ["Bananas", "Apples"] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});
export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
