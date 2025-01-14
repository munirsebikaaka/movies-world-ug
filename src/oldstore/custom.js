import { useEffect } from "react";

const KEY = "ef1735bd";

export function useFectchedData(inputs, holdData) {
  useEffect(
    function () {
      if (!inputs) return;
      fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${inputs}`)
        .then((res) => res.json())
        .then((data) => holdData(data));
    },
    [inputs]
  );
}
export function useGetMovies(movie, holdData, setData) {
  useEffect(
    function () {
      if (movie.length >= 4) {
        setData(true);
        fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${movie}`)
          .then((res) => res.json())
          .then((data) => holdData(data.Search));
        setData(false);
      }
    },
    [movie]
  );
}
