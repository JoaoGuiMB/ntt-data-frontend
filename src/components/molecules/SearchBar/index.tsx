import { FlexBox, Input, Button } from "@ui5/webcomponents-react";
import "./styles.scss";
import { useState } from "react";

import { useMovieDispatch } from "../../../redux/hooks/useMovies";
import { searchForMovie } from "../../../redux/slices/movieSearchSlice";
import { movieApi } from "../../../redux/slices/movieApi";

export default function SearchBar() {
  const [searchMovieInput, setSearchMovieInput] = useState<string>("");
  const dispatch = useMovieDispatch();

  const handleSearchMovie = () => {
    dispatch(
      searchForMovie({
        currentMovie: searchMovieInput,
      })
    );
  };

  const resetState = () => {
    dispatch(movieApi.util.resetApiState());
    dispatch(searchForMovie({ currentMovie: "" }));
    setSearchMovieInput("");
  };

  return (
    <FlexBox className="test" justifyContent="SpaceBetween">
      <Input
        id="searchMovieInput"
        placeholder="Search for a movie"
        value={searchMovieInput}
        onInput={(e) => setSearchMovieInput(e.target.value || "")}
      />
      <Button
        className="button"
        onClick={handleSearchMovie}
        disabled={!searchMovieInput.length}
      >
        Search
      </Button>
      <Button className="button" onClick={resetState}>
        Reset
      </Button>
    </FlexBox>
  );
}
