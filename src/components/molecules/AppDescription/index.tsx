import { FlexBox, Title, Text } from "@ui5/webcomponents-react";
import "./styles.scss";

export default function AppDescription() {
  return (
    <FlexBox direction="Column" justifyContent="Center" alignItems="Center">
      <div id="logoContainer">
        <img src="/NTTmoviesWhite.png" alt="Logo" />
        <Title level="H1">NTTmovies</Title>
      </div>
      <Text style={{ fontSize: 16 }}>
        NTTmovies is a web application that allows you to search for movies and
        series and see their details.
      </Text>
    </FlexBox>
  );
}
