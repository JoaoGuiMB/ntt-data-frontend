import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
const initialState = {
  currentMovie: "",
};

export const searchMovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    searchForMovie: (state, action: PayloadAction<typeof initialState>) => {
      state.currentMovie = action.payload.currentMovie;
    },
  },
});

export const { searchForMovie } = searchMovieSlice.actions;
export const selectMovie = (state: RootState) => state.movieReducer;
