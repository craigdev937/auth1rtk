import { createSlice, 
    PayloadAction } from "@reduxjs/toolkit";
import { IUser, IAuth } from "../models/Interfaces";

const initialState: IAuth = {
    isAuth: false,
    user: null
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setCred: (
            state, 
            action: PayloadAction<Omit<IUser, "password">>
        ) => {
            state.isAuth = true,
            state.user = action.payload
        },
        clearCred: (state) => {
            state.isAuth = false,
            state.user = null
        },
    }
});

export const AUTH = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;


