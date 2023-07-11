import { Title, Text, Button } from "@ui5/webcomponents-react";
import "./styles.scss";
import BoldText from "../../atoms/BoldText";
import StarRatings from "react-star-ratings";

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
        <Text className="textMargin">
          <BoldText text="Actors: " />
          <Text>Will Smith</Text>
        </Text>
        <Text className="textMargin">
          <BoldText text="Duration: " />
          Duration: <Text>Will Smith</Text>
        </Text>
        <Text className="textMargin">
          <BoldText text="Rating: " />{" "}
          <StarRatings
            starDimension="20px"
            numberOfStars={5}
            rating={3.3}
            starRatedColor="#FFD700"
          />
        </Text>
        <Button className="textMargin">Favorite</Button>
      </div>
    </div>
  );
}
