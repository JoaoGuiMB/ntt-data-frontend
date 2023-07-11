import { FlexBox, Title, Text } from "@ui5/webcomponents-react";

export default function AppDescription() {
  return (
    <FlexBox direction="Column" justifyContent="Center" alignItems="Center">
      <Title level="H1">NTTmovies</Title>
      <Text style={{ fontSize: 16 }}>
        NTTmovies is a web application that allows you to search for movies and
        series and see their details.
      </Text>
    </FlexBox>
  );
}
