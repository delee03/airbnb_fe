import { configureStore } from "@reduxjs/toolkit";
import viTriSlice from "./viTriSlice";
import roomDetailReducer from "./roomDetailSlice";
import reservationSlice from "./reservationSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    viTri: viTriSlice,
    roomDetailReducer,
    reservationReducer: reservationSlice,
    nguoiDungSlice,
    authSlice: authSlice,
  },
});

export default store;
