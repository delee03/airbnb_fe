import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getRoomByLocationId } from "../service/getRoomByLocationId";
import { roomPagination } from "../service/roomPagination.service";
// First, create the thunk
export const fetchRoomById = createAsyncThunk(
    "rooms/fetchRoomById",
    async (roomId, thunkApi) => {
        const response = await getRoomByLocationId.getRoomById(roomId);
        console.log(response);
        return response.data.content;
    }
);

export const fetchCreateRoom = createAsyncThunk(
    "rooms/fetchCreateRoom",
    async (data, thunkApi) => {
        const response = await getRoomByLocationId.createRoom(data);

        console.log(response);
        return response.data.content;
    }
);

const initialState = {
    room: {},

    roomCreate: {},
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

        builder.addCase(fetchCreateRoom.fulfilled, (state, action) => {
            state.roomCreate = action.payload;
            console.log(action);
        });
    },
});

export const {} = roomReducer.actions;

export default roomReducer.reducer;
