import { useEffect } from "react";
const movieTitle = "Prison break";
const movieTitleTwo = "wild flower";
const movieTitleThree = "killer";
const apikey = "ef1735bd";
export function useGetTrandingDetail(setMovieDetails, search, setTrend) {
  useEffect(
    function () {
      setTrend(true);
      fetch(`
          http://www.omdbapi.com/?apikey=${apikey}&s=${
        search.length < 4 ? movieTitle : search
      }`)
        .then((res) => res.json())
        .then((data) => {
          setMovieDetails(data.Search);
          setTrend(false);
        });
    },
    [setMovieDetails, search, setTrend]
  );
}
export function useGetSeriesDetail(setTvSeries, search, setSery) {
  useEffect(
    function () {
      setSery(true);
      fetch(`
            http://www.omdbapi.com/?apikey=${apikey}&s=${
        search.length < 4 ? movieTitleTwo : search
      }`)
        .then((res) => res.json())
        .then((data) => {
          setTvSeries(data.Search);
          setSery(false);
        });
    },
    [setTvSeries, search, setSery]
  );
}
export function useGetMoviesDetail(setMovies, search, setMovie) {
  useEffect(
    function () {
      setMovie(true);
      fetch(`
              http://www.omdbapi.com/?apikey=${apikey}&s=${
        search.length < 4 ? movieTitleThree : search
      }`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.Search);
          setMovie(false);
        });
    },
    [setMovies, search, setMovie]
  );
}
