import MovieInfo from "../../molecules/MovieInfo";
import MoviePoster from "../../molecules/MoviePoster";
import { useMovieSelector } from "../../../redux/hooks/useMovies";
import { selectMovie } from "../../../redux/slices/movieSearchSlice";
import { useSearchMovieQuery } from "../../../redux/slices/movieApi";
import ClipLoader from "react-spinners/ClipLoader";
import { Text } from "@ui5/webcomponents-react";
import "./styles.scss";

export default function MovieContent() {
  const selectedMovie = useMovieSelector(selectMovie);
  const { data, isLoading, isError } = useSearchMovieQuery(
    selectedMovie.currentMovie
  );

  if (isError) {
    return (
      <div className="errorContainer">
        <Text>Movie Not found!</Text>
      </div>
    );
  }

  return (
    <div className="movieContentContainer">
      <ClipLoader
        color={"blue"}
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {data && (
        <>
          <MovieInfo movie={data} />
          <MoviePoster imgPath={data.poster} />
        </>
      )}
    </div>
  );
}
