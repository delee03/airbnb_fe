import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getRoomById } from "../service/getRoomDetail";
// First, create the thunk
export const fetchRoomById = createAsyncThunk(
    "rooms/fetchRoomById",
    async (roomId, thunkApi) => {
        const response = await getRoomById(roomId);
        console.log(response);
        return response.data.content;
    }
);

const initialState = {
    room: {},
};

const roomReducer = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchRoomById.fulfilled, (state, action) => {
            state.room = action.payload;
            console.log(action);
        });
    },
});

export const {} = roomReducer.actions;

export default roomReducer.reducer;
