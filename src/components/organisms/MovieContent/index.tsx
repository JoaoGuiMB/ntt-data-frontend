import MovieInfo from "../../molecules/MovieInfo";
import MoviePoster from "../../molecules/MoviePoster";
import { useMovieSelector } from "../../../redux/hooks/useMovies";
import { selectMovie } from "../../../redux/slices/movieSearchSlice";
import { useSearchMovieQuery } from "../../../redux/slices/movieApi";
import ClipLoader from "react-spinners/ClipLoader";
import { Toast, ToastDomRef } from "@ui5/webcomponents-react";
import "./styles.scss";
import { useRef } from "react";

export default function MovieContent() {
  const toast = useRef<ToastDomRef>(null);
  const selectedMovie = useMovieSelector(selectMovie);
  const { data, isError, isLoading } = useSearchMovieQuery(
    selectedMovie.currentMovie
  );

  if (isError) {
    toast?.current?.show();
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
      <Toast ref={toast} placement="TopEnd">
        Movie not found!
      </Toast>
      {data && (
        <>
          <MovieInfo movie={data} />
          <MoviePoster imgPath={data.poster} />
        </>
      )}
    </div>
  );
}
