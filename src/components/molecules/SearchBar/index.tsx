import { FlexBox, Input, Button } from "@ui5/webcomponents-react";
import "./styles.scss";

export default function SearchBar() {
  return (
    <FlexBox className="test" justifyContent="SpaceBetween">
      <Input id="searchMovieInput" placeholder="Search for a movie" />
      <Button className="button">Search</Button>
      <Button className="button">Reset</Button>
    </FlexBox>
  );
}
