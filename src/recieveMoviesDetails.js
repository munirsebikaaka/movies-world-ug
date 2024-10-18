import { useState } from "react";
import MoviesInformation from "./moviesInfor";

export default function AllAboutMoviesDeTails({
  onMovies,
  onSetMovieID,
  onMovieId,
}) {
  const [showDetail, setShowDetail] = useState(false);
  function showDetails() {
    setShowDetail(true);
  }
  function onGetMovieID(ID) {
    onSetMovieID(ID);
  }
  return (
    <div className="main">
      <MoviesList
        onMovies={onMovies}
        onHandleShowDetails={showDetails}
        onGetMovieID={onGetMovieID}
      />
      <MoviesInformation onShowDetail={showDetail} onMovieId={onMovieId} />
    </div>
  );
}
function MoviesList({ onMovies, onGetMovieID }) {
  return (
    <div className="box">
      <ul className="list list-movies">
        {onMovies.map((el) => (
          <li onClick={() => onGetMovieID(el.imdbID)} key={el.Title}>
            {" "}
            <img src={el.Poster} alt={`${el.Title} poster`} className="img" />
            <div>
              <h1>{el.Title}</h1> <span>{el.Year}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
