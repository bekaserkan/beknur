const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "card",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload
      );
    },
    deleteItemFrom: (state, action) => {
      state.itemsInCart = (action.payload)
    },
  },
});

export const { setItemInCart, deleteItemFromCart, deleteItemFrom } = cartSlice.actions;
export default cartSlice.reducer;
