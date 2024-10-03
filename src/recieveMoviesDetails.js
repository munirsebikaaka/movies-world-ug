export default function AllAboutMoviesDeTails({ tempMovieData }) {
  return (
    <div className="main">
      <MoviesList tempMovieData={tempMovieData} />
      <WatchedMovies />
    </div>
  );
}
function MoviesList({ tempMovieData }) {
  return (
    <div className="box">
      <ul className="list list-movies">
        {tempMovieData.map((el) => (
          <li key={el.Title}>
            {" "}
            <img src={el.Poster} alt={`${el.Title} poster`} />
            <h1>{el.Title}</h1> <span>{el.Year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
function WatchedMovies() {
  return <div className="box">watched</div>;
}
