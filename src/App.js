import { useState } from "react";
import Login from "./newStore/login";
import SignIn from "./newStore/signIn";
import HOME from "./newStore/details/home";
import BookMarks from "./oldstore/bookmarks";
import TVSeries from "./oldstore/tvseries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./oldstore/movies";
import {
  useGetMoviesDetail,
  useGetSeriesDetail,
  useGetTrandingDetail,
} from "./newStore/apiCalls";

function App() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [tvseries, setTvSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [marked, setMarked] = useState([]);
  const [showApp, setShowApp] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const [acounts, setAcounts] = useState([]);

  const [searchTrends, setSearchTrends] = useState("");
  const [searchTvSeries, setSearchTvSeries] = useState("");
  const [searchMovies, setSearchMovies] = useState("");

  const [trend, setTrend] = useState(false);
  const [sery, setSery] = useState(false);
  const [movie, setMovie] = useState(false);

  useGetTrandingDetail(setMovieDetails, searchTrends, setTrend);
  useGetSeriesDetail(setTvSeries, searchTvSeries, setSery);
  useGetMoviesDetail(setMovies, searchMovies, setMovie);

  return (
    <div>
      {hasAccount ? (
        <Login
          acounts={acounts}
          setHasAccount={setHasAccount}
          setShowApp={setShowApp}
          showApp={showApp}
        />
      ) : (
        <SignIn
          acounts={acounts}
          setAcounts={setAcounts}
          setHasAccount={setHasAccount}
          setShowApp={setShowApp}
          showApp={showApp}
        />
      )}
      {showApp && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <HOME
                  movieDetails={movieDetails}
                  setMovieDetails={setMovieDetails}
                  marked={marked}
                  setMarked={setMarked}
                  searchTrends={searchTrends}
                  setSearchTrends={setSearchTrends}
                  trend={trend}
                />
              }
            />
            <Route
              path="movies"
              element={
                <Movies
                  movies={movies}
                  setMovies={setMovies}
                  marked={marked}
                  searchMovies={searchMovies}
                  setSearchMovies={setSearchMovies}
                  movie={movie}
                />
              }
            />
            <Route
              path="tvseries"
              element={
                <TVSeries
                  tvseries={tvseries}
                  setTvSeries={setTvSeries}
                  marked={marked}
                  searchTvSeries={searchTvSeries}
                  setSearchTvSeries={setSearchTvSeries}
                  sery={sery}
                />
              }
            />
            <Route
              path="bookmark"
              element={<BookMarks marked={marked} setMarked={setMarked} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
