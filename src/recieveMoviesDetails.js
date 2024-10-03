import { useState } from "react";

export default function AllAboutMoviesDeTails({ onMovies }) {
  const [showDetail, setShowDetail] = useState(false);
  function showDetails() {
    setShowDetail(true);
  }
  return (
    <div className="main">
      <MoviesList onMovies={onMovies} onHandleShowDetails={showDetails} />
      <WatchedMovies onShowDetail={showDetail} />
    </div>
  );
}
function MoviesList({ onMovies, onHandleShowDetails }) {
  return (
    <div className="box">
      <ul className="list list-movies">
        {onMovies.map((el) => (
          <li onClick={onHandleShowDetails} key={el.Title}>
            {" "}
            <img src={el.Poster} alt={`${el.Title} poster`} />
            <h1>{el.Title}</h1> <span>{el.Year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
function WatchedMovies({ onShowDetail }) {
  return <>{onShowDetail ? <div className="box">watched</div> : ""}</>;
}
