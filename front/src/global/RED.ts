import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice";

export const RED = configureStore({
    reducer: {
        auth: AuthReducer,
    }
});

export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


