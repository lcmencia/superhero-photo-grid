import { configureStore } from "@reduxjs/toolkit";
import { heroesApi } from "./services/heroesApi";

export const store = configureStore({
  reducer: {
    [heroesApi.reducerPath]: heroesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([heroesApi.middleware]);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
