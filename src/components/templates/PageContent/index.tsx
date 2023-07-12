import { FlexBox } from "@ui5/webcomponents-react";
import SearchMovie from "../../organisms/SearchMovie";
import MovieContent from "../../organisms/MovieContent";
import { selectMovie } from "../../../redux/slices/movieSearchSlice";
import { useMovieSelector } from "../../../redux/hooks/useMovies";
import "./styles.scss";

export default function PageContent() {
  const selectedMovie = useMovieSelector(selectMovie);
  return (
    <>
      <FlexBox className="pageContentContainer" direction="Column">
        <SearchMovie />
        {selectedMovie?.currentMovie ? <MovieContent /> : null}
      </FlexBox>
    </>
  );
}
