import { configureStore } from "@reduxjs/toolkit";
import viTriSlice from "./viTriSlice";

export const store = configureStore({
    reducer: {
        viTriReducer: viTriSlice,
    },
});
