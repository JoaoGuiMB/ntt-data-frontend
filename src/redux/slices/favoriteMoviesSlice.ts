import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  favoritesMovies: [] as string[],
};

export const favortieMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
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

export const { addMovieToFavorites } = favortieMoviesSlice.actions;
export const isMovieFavorite = (name: string) => (state: RootState) =>
  state.favoriteMoviesReducer.favoritesMovies.includes(name);
