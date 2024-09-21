import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dsViTri: [],
    valueSearch: "",
};

const viTriSlice = createSlice({
    name: "viTri",
    initialState,
    reducers: {
        setdsViTri: (state, action) => {
            console.log(action);
            state.dsViTri = action.payload;
        },
        updateValueSearch: (state, action) => {
            console.log(action);
            state.valueSearch = action.payload;
        },
    },
});

export const { setdsViTri, updateValueSearch } = viTriSlice.actions;

export default viTriSlice.reducer;
