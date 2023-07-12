import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./slices/movieApi";
import { searchMovieSlice } from "./slices/movieSearchSlice";

export const store = configureStore({
  reducer: {
    movieReducer: searchMovieSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type MovieDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
