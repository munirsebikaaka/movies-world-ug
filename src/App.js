// import { useState } from "react";
// import Header from "./header";
// import AllAboutMoviesDeTails from "./recieveMoviesDetails";
// import disAbleDrill from "./setContext";
// import { useGetMovies } from "./custom";
// const KEY = "ef1735bd";

import { useState } from "react";
import Login from "./newStore/login";

function App() {
  const [acounts, setAcounts] = useState([
    {
      name: "codes",
      email: "codes@gmail.com",
      phone: "0742083075",
      password: "codes",
    },
  ]);
  return (
    <div>
      <Login acounts={acounts} />
    </div>
  );

  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [movie, setMovie] = useState("");
  // const [movieId, setMovieId] = useState(null);
  // useGetMovies(movie, setMovies, setLoading);
  // return (
  //   <div>
  //     <Header onMovies={movies} onGeMovie={movie} onSetGetMovie={setMovie} />
  //     <disAbleDrill.Provider value={movieId}>
  //       {loading ? (
  //         <h1>loading.....</h1>
  //       ) : (
  //         <AllAboutMoviesDeTails
  //           onMovies={movies}
  //           onSetMovieID={setMovieId}
  //           movie={movie}
  //         />
  //       )}
  //     </disAbleDrill.Provider>
  //   </div>
  // );
}

export default App;
