import MovieInfo from "../../molecules/MovieInfo";
import MoviePoster from "../../molecules/MoviePoster";
import "./styles.scss";

export default function MovieContent() {
  return (
    <div className="movieContentContainer">
      <MovieInfo />
      <MoviePoster />
    </div>
  );
}
