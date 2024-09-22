import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrReservation: [],
    arrRoomById: [],
};

const reservationSlice = createSlice({
    name: "reservation",
    initialState,
    reducers: {
        updateFromApiReservation: (state, action) => {
            state.arrReservation = action.payload;
            console.log(action);
        },
        updateRoomReservation: (state, action) => {
            state.arrRoomById = [...state.arrRoomById, action.payload];
            console.log(action);
        },
    },
});

export const { updateFromApiReservation, updateRoomReservation } =
    reservationSlice.actions;

export default reservationSlice.reducer;
