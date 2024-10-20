import { useEffect, useState } from "react";
import Header from "./header";
import AllAboutMoviesDeTails from "./recieveMoviesDetails";

const KEY = "ef1735bd";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [movieId, setMovieId] = useState(null);
  useEffect(
    function () {
      if (movie.length >= 4)
        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${movie}`)
          .then((res) => res.json())
          .then((data) => {
            setMovies(data.Search);
          });
    },
    [movie]
  );

  return (
    <div>
      <Header onMovies={movies} onGeMovie={movie} onSetGetMovie={setMovie} />
      <AllAboutMoviesDeTails
        onMovies={movies}
        onSetMovieID={setMovieId}
        onMovieId={movieId}
      />
    </div>
  );
}

export default App;
