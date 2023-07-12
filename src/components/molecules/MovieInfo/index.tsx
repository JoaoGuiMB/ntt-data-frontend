import { Title, Text, Button, Icon } from "@ui5/webcomponents-react";
import "./styles.scss";
import BoldText from "../../atoms/BoldText";
import StarRatings from "react-star-ratings";
import { MovieDTO } from "../../../types/movie";
import {
  addMovieToFavorites,
  isMovieFavorite,
} from "../../../redux/slices/movieSearchSlice";
import {
  useMovieDispatch,
  useMovieSelector,
} from "../../../redux/hooks/useMovies";

interface MovieInfoProps {
  movie: MovieDTO;
}

export default function MovieInfo({ movie }: MovieInfoProps) {
  const { title, runtime, plot, imdbRating, actors, awards, year } = movie;
  const dispatch = useMovieDispatch();
  const isFavorite = useMovieSelector(isMovieFavorite(title));

  const addToFavorites = () => {
    dispatch(addMovieToFavorites(title));
  };

  return (
    <div className="movieInfoContainer">
      <div id="movieDescription">
        <Title>{title}</Title>
        <Text>{plot}</Text>
      </div>
      <div id="movieInformationContainer">
        <Text className="textMargin">
          <BoldText text="Actors: " />
          <Text>{actors}</Text>
        </Text>
        <Text className="textMargin">
          <BoldText text="Duration: " />
          <Text>{runtime}</Text>
        </Text>
        <Text className="textMargin">
          <BoldText text="Year: " />
          <Text>{year}</Text>
        </Text>
        <Text className="textMargin">
          <BoldText text="Awards: " />
          <Text>{awards}</Text>
        </Text>
        <Text className="textMargin">
          <BoldText text="Rating: " />{" "}
          <StarRatings
            starDimension="20px"
            numberOfStars={5}
            rating={+imdbRating / 2}
            starRatedColor="#FFD700"
          />
        </Text>

        <Button
          className="textMargin"
          onClick={addToFavorites}
          icon={isFavorite ? "delete" : "add"}
          iconEnd={true}
        >
          Favorite
        </Button>
      </div>
    </div>
  );
}
