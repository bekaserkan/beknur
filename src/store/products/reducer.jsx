const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: null,
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
