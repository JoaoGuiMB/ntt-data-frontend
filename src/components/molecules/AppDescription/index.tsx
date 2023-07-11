import TitleComponent from "../../atoms/Title";
import TextComponent from "../../atoms/Text";

export default function AppDescription() {
  return (
    <>
      <TitleComponent level="H1">NTTmovies</TitleComponent>
      <TextComponent>
        NTTmovies is a web application that allows you to search for movies and
        series and see their details.
      </TextComponent>
    </>
  );
}
