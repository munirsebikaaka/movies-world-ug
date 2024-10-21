import { useEffect, useState } from "react";
import Header from "./header";
import AllAboutMoviesDeTails from "./recieveMoviesDetails";
import disAbleDrill from "./setContext";
const KEY = "ef1735bd";

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
      <disAbleDrill.Provider value={movieId}>
        <AllAboutMoviesDeTails onMovies={movies} onSetMovieID={setMovieId} />
      </disAbleDrill.Provider>
    </div>
  );
}

export default App;
