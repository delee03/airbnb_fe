import { configureStore } from "@reduxjs/toolkit";
import viTriSlice from "./viTriSlice";
import roomDetailReducer from "./roomDetailSlice";
import reservationSlice from "./reservationSlice";

export const store = configureStore({
    reducer: {
        viTriReducer: viTriSlice,
        roomDetailReducer,
        reservationReducer: reservationSlice,
    },
});
