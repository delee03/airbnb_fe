import { configureStore } from "@reduxjs/toolkit";
import viTriSlice from "./viTriSlice";
import roomDetailReducer from "./roomDetailSlice";
import reservationSlice from "./reservationSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import authSlice from "./authSlice";
import roomFavoriteSlice from "./roomFavoriteSlice";

export const store = configureStore({
    reducer: {
        viTriReducer: viTriSlice,
        roomDetailReducer,
        reservationReducer: reservationSlice,
        nguoiDungSlice,
        authSlice: authSlice,
        roomFavoriteReducer: roomFavoriteSlice,
    },
});

export default store;
