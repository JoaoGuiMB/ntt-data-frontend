import { FlexBox } from "@ui5/webcomponents-react";
import SearchMovie from "../../organisms/SearchMovie";

export default function PageContent() {
  return (
    <>
      <FlexBox
        style={{ marginTop: 20 }}
        justifyContent="Center"
        alignItems="Center"
      >
        <SearchMovie />
      </FlexBox>
    </>
  );
}
