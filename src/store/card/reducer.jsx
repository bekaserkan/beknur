const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "card",
  initialState: {
    itemsInCart: [],
    itemsInProduct: [],
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
      state.itemsInCart = action.payload;
    },
    setItemInProduct: (state, action) => {
      state.itemsInProduct.push(action.payload);
    },
    deleteItemFromProduct: (state, action) => {
      state.itemsInProduct = state.itemsInProduct.filter(
        (game) => game.id !== action.payload
      );
    },
    deleteItemFromProducts: (state, action) => {
      state.itemsInProduct = action.payload;
    },
  },
});

export const {
  setItemInCart,
  deleteItemFromCart,
  deleteItemFrom,
  setItemInProduct,
  deleteItemFromProduct,
  deleteItemFromProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
