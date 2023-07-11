import { FlexBox } from "@ui5/webcomponents-react";
import AppDescription from "../../molecules/AppDescription";
import SearchBar from "../../molecules/SearchBar";
import "./styles.scss";

export default function SearchMovie() {
  return (
    <FlexBox
      className="container"
      direction="Column"
      justifyContent="Center"
      alignItems="Center"
    >
      <AppDescription />
      <SearchBar />
    </FlexBox>
  );
}
