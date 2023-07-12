/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieDTO } from "../../types/movie";

const baseUrl = process.env.VITE_MOVIE_API_URL || "http://localhost:3000";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    searchMovie: builder.query<MovieDTO, string>({
      query: (movieName: string) => `/movies/${movieName}`,
    }),
  }),
});

export const { useSearchMovieQuery, useLazySearchMovieQuery } = movieApi;
