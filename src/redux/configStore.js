import { configureStore } from "@reduxjs/toolkit";
import viTriSlice from "./viTriSlice";
import roomDetailReducer from "./roomDetailSlice";
import reservationSlice from "./reservationSlice";
import nguoiDungSlice from "./nguoiDungSlice";

export const store = configureStore({
  reducer: {
    viTriReducer: viTriSlice,
    roomDetailReducer,
    reservationReducer: reservationSlice,
    nguoiDungSlice,
  },
});

export default store;
