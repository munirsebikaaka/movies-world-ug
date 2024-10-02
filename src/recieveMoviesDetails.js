export default function AllAboutMoviesDeTails({ tempMovieData }) {
  return (
    <div>
      <MoviesList tempMovieData={tempMovieData} />
      <WatchedMovies />
    </div>
  );
}
function MoviesList({ tempMovieData }) {
  return (
    <div>
      <ul>
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
  return <div>watched</div>;
}
