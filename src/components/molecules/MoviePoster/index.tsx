import "./styles.scss";

interface MoviePosterProps {
  imgPath: string;
}

export default function MoviePoster({ imgPath }: MoviePosterProps) {
  return (
    <div className="moviePosterContainer">
      <img src={imgPath} alt="Movie Poster" />
    </div>
  );
}
