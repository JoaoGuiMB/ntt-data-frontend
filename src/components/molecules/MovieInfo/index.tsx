import { FlexBox, Title, Text, Button } from "@ui5/webcomponents-react";
import "./styles.scss";
export default function MovieInfo() {
  return (
    <div className="movieInfoContainer">
      <div id="movieDescription">
        <Title>Movie Name</Title>
        <Text>
          In the not-so-distant future, Earth is on the brink of a catastrophic
          energy crisis. Amidst the chaos, a brilliant yet reclusive scientist
          named Dr. Evelyn Reed discovers an anomalous energy source known as
          the "Nexus." Harnessing its limitless power could solve the world's
          energy crisis, but the Nexus is also shrouded in mystery and potential
          danger.
        </Text>
      </div>
      <div id="movieInformationContainer">
        <Text>
          Actors: <Text>Will Smith</Text>
        </Text>
        <Text>
          Duration: <Text>Will Smith</Text>
        </Text>
        <Text>
          Rating: <Text>Will Smith</Text>
        </Text>
        <Button>Favorite</Button>
      </div>
    </div>
  );
}
