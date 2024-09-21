import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dsViTri: [],
};

const viTriSlice = createSlice({
    name: "viTri",
    initialState,
    reducers: {
        setdsViTri: (state, action) => {
            console.log(action);
            state.dsViTri = action.payload;
        },
    },
});

export const { setdsViTri } = viTriSlice.actions;

export default viTriSlice.reducer;
