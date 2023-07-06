import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import userReduser from "./slices/userSlice";
import cartReducer from "./card/reducer";
import productsReducer from "./products/reducer";

const middleware = [...getDefaultMiddleware(), thunkMiddleware];

export const store = configureStore({
  reducer: {
    user: userReduser,
    cart: cartReducer,
    product: productsReducer,
  },
  middleware,
});
