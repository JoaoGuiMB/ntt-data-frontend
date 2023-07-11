import { FlexBox } from "@ui5/webcomponents-react";
import AppDescription from "../../molecules/AppDescription";

export default function PageContent() {
  return (
    <>
      <FlexBox
        style={{ marginTop: 20 }}
        justifyContent="Center"
        alignItems="Center"
      >
        <AppDescription />
      </FlexBox>
    </>
  );
}
