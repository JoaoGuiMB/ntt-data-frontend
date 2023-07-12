import { FlexBox, Input, Button } from "@ui5/webcomponents-react";
import "./styles.scss";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { searchForMovie } from "../../../redux/slices/movieSearchSlice";

export default function SearchBar() {
  const [searchMovieInput, setSearchMovieInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearchMovie = () => {
    dispatch(
      searchForMovie({
        currentMovie: searchMovieInput,
      })
    );
  };

  return (
    <FlexBox className="test" justifyContent="SpaceBetween">
      <Input
        id="searchMovieInput"
        placeholder="Search for a movie"
        value={searchMovieInput}
        onInput={(e) => setSearchMovieInput(e.target.value || "")}
      />
      <Button className="button" onClick={handleSearchMovie}>
        Search
      </Button>
      <Button className="button">Reset</Button>
    </FlexBox>
  );
}
