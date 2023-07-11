import { FlexBox } from "@ui5/webcomponents-react";
import SearchMovie from "../../organisms/SearchMovie";
import MovieContent from "../../organisms/MovieContent";
import "./styles.scss";

export default function PageContent() {
  return (
    <>
      <FlexBox className="pageContentContainer" direction="Column">
        <SearchMovie />
        <MovieContent />
      </FlexBox>
    </>
  );
}
