import { configureStore } from "@reduxjs/toolkit";

export const RED = configureStore({
    reducer: {
        users: () => "Users JWT and Encryption!"
    }
});

export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


