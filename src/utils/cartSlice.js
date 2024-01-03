import { createSlice } from "@reduxjs/toolkit";
import findItem from "./findItem";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = findItem(state.items, action.payload.id)
      const itemAlreadyPresent =  itemIndex !== -1
      if (itemAlreadyPresent) {
        state.items[itemIndex].quantity += 1
      } else {
        action.payload.quantity = 1
        state.items.push(action.payload);
      }
      
    },
    removeItem: (state, action) => {
      const itemIndex = findItem(state.items, action.payload.id)
      if ((itemIndex !== -1) && (action.payload?.quantity === 1)) {
        state.items.splice(itemIndex, 1)
      } else if ((itemIndex !== -1) && (action.payload?.quantity > 1)) {
        state.items[itemIndex].quantity -= 1
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
