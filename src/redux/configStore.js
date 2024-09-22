import { configureStore } from "@reduxjs/toolkit";
import viTriSlice from "./viTriSlice";
import roomDetailReducer from "./roomDetailSlice";

export const store = configureStore({
  reducer: {
    viTriReducer: viTriSlice,
    roomDetailReducer,
  },
});

export default store;
