import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "../services/usersApi";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(usersApi.middleware)
});

setupListeners(store.dispatch)