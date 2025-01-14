import { useState } from "react";
import MoviesInformation from "./moviesInfor";

export default function AllAboutMoviesDeTails({
  onMovies,
  onSetMovieID,
  movie,
}) {
  const [showDetailCell, setShowDetailCell] = useState(false);
  const [loading, setLoading] = useState(false);

  function onGetMovieID(ID) {
    onSetMovieID(ID);
    setShowDetailCell(true);
  }
  return (
    <div className="main">
      {onMovies.length < 1 ? (
        <h1>Please fill in the search bar</h1>
      ) : (
        <MoviesList
          onMovies={onMovies}
          onGetMovieID={onGetMovieID}
          movie={movie}
        />
      )}
      {loading ? (
        <h1>loading........</h1>
      ) : (
        <MoviesInformation
          showDetailCell={showDetailCell}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}
function MoviesList({ onMovies, onGetMovieID, movie }) {
  return (
    <>
      {movie.length > 0 ? (
        <div className="box">
          <ul className="list list-movies">
            {onMovies.map((el) => (
              <li onClick={() => onGetMovieID(el.imdbID)} key={el.Title}>
                {" "}
                <img
                  src={el.Poster}
                  alt={`${el.Title} poster`}
                  className="img"
                />
                <div>
                  <h1>{el.Title}</h1> <span>{el.Year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>Please fill in the search bar.</h1>
      )}
    </>
  );
}
