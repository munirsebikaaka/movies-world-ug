import { useState, useContext } from "react";
import disAbleDrill from "./setContext";
import { useFectchedData } from "./custom";

export default function MoviesInformation({ showDetailCell }) {
  const movieId = useContext(disAbleDrill);
  const [details, setDetails] = useState("");

  const {
    Actors,
    Director,
    Genre,
    Poster,
    Released,
    Plot,
    Title,
    Runtime,
    imdbRating,
  } = details;

  useFectchedData(movieId, setDetails);

  return (
    <div>
      {showDetailCell ? (
        <div className="details">
          <header>
            <img src={Poster} alt={`poster of ${details}`} />
            <div className="details-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐️</span>Rating
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <p>
              <em>{Plot}</em>
            </p>
            <p>Staring {Actors}</p>
            <p>Directed by {Director}</p>
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
