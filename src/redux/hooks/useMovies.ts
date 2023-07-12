import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, MovieDispatch } from "../store";

export const useMovieDispatch: () => MovieDispatch = useDispatch;
export const useMovieSelector: TypedUseSelectorHook<RootState> = useSelector;
