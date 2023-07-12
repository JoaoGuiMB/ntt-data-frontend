import MovieInfo from "../../molecules/MovieInfo";
import MoviePoster from "../../molecules/MoviePoster";
import { useMovieSelector } from "../../../redux/hooks/useMovies";
import { selectMovie } from "../../../redux/slices/movieSearchSlice";
import { useSearchMovieQuery } from "../../../redux/slices/movieApi";
import "./styles.scss";

export default function MovieContent() {
  const selectedMovie = useMovieSelector(selectMovie);
  const { data } = useSearchMovieQuery(selectedMovie.currentMovie);
  return (
    <div className="movieContentContainer">
      {data && (
        <>
          <MovieInfo movie={data} />
          <MoviePoster imgPath={data.poster} />
        </>
      )}
    </div>
  );
}
