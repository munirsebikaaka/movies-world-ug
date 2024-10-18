import { useEffect, useState } from "react";

const KEY = "ef1735bd";
export default function MoviesInformation({ onMovieId }) {
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
  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${onMovieId}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  return (
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
            <span>⭐️</span>
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
  );
}
