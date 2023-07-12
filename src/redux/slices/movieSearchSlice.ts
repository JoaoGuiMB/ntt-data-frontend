import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  currentMovie: "",
  favoritesMovies: [] as string[],
};

export const searchMovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    searchForMovie: (state, action: PayloadAction<typeof initialState>) => {
      state.currentMovie = action.payload.currentMovie;
    },
    addMovieToFavorites: (state, action: PayloadAction<string>) => {
      if (state.favoritesMovies.includes(action.payload)) {
        state.favoritesMovies = state.favoritesMovies.filter(
          (movie) => movie !== action.payload
        );
      } else {
        state.favoritesMovies.push(action.payload);
      }
    },
  },
});

export const { searchForMovie, addMovieToFavorites } = searchMovieSlice.actions;
export const selectMovie = (state: RootState) => state.movieReducer;
export const isMovieFavorite = (name: string) => (state: RootState) =>
  state.movieReducer.favoritesMovies.includes(name);
