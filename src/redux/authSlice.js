import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const initialState = {
    infoUser: getLocalStorage("user"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateInfoUser: (state, action) => {
            state.infoUser = action.payload;
            localStorage.removeItem("user");
            setLocalStorage("user", action.payload);
        },
    },
});

export const { updateInfoUser } = authSlice.actions;

export default authSlice.reducer;
