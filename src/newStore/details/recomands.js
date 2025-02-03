import { MdLocalMovies } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

const Recomands = () => {
  const [movieDetails, setMovieDetails] = useState([{}]);
  const [movieDetails2, setMovieDetails2] = useState([{}]);
  const [showPlay, setShowPlay] = useState(false);
  const news = "Relentless";
  const news2 = "Diary";
  const apikey = "ef1735bd";

  // useEffect(function () {
  //   fetch(`
  //     http://www.omdbapi.com/?apikey=${apikey}&s=${news}`)
  //     .then((res) => res.json())
  //     .then((data) => setMovieDetails(data.Search));
  // }, []);
  // useEffect(function () {
  //   fetch(`
  //     http://www.omdbapi.com/?apikey=${apikey}&s=${news2}`)
  //     .then((res) => res.json())
  //     .then((data) => setMovieDetails2(data.Search));
  // }, []);
  const [recImgs, setRecImgs] = useState([
    {
      photoSrc: "imgs/img1.png",
      movieName: "movie 1",
      type: "movie",
      year: 2000,
      id: 1,
      play: false,
    },
    {
      photoSrc: "imgs/img2.png",
      movieName: "movie 2",
      type: "series",
      year: 2000,
      id: 2,
      play: false,
    },
    {
      photoSrc: "imgs/img4.png",
      movieName: "movie 3",
      type: "series",
      play: false,
      id: 3,
      year: 2000,
    },
    {
      photoSrc: "imgs/img3.png",
      movieName: "movie 4",
      type: "movie",
      year: 2000,
      id: 4,
      play: false,
    },
  ]);
  function changePlay(id) {
    setRecImgs(
      recImgs.map((items) =>
        items.id === id ? { ...items, play: true } : items
      )
    );
  }
  function setDefault(id) {
    setRecImgs(
      recImgs.map((items) =>
        items.id === id ? { ...items, play: false } : items
      )
    );
  }

  return (
    <div className="home">
      <h1 className="head">Recomanded for you</h1>
      <ul className="movies-list">
        {recImgs.map((detail) => (
          <li key={detail.movieName}>
            <div
              onMouseEnter={() => changePlay(detail.id)}
              onMouseLeave={() => setDefault(detail.id)}
              className="list"
              style={
                detail.play === true
                  ? {
                      backgroundImage: `
                linear-gradient(rgb(0 0 0 /35%),rgb(0 0 0 / 35%)),url(${detail.photoSrc})`,
                    }
                  : {
                      backgroundImage: `
                url(${detail.photoSrc})`,
                    }
              }
            >
              {detail.play ? (
                <button className="play">
                  <IoIosPlayCircle className="icon-b" />
                  Play
                  {/*  */}
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="det">
              <p className="year">
                {detail.year}
                <MdLocalMovies /> {detail.type} - PG
              </p>
            </div>
            <h1>{detail.movieName}</h1>
          </li>
        ))}

        {recImgs.map((detail) => (
          <li key={detail.movieName}>
            <div
              className="list"
              style={{ backgroundImage: `url(${detail.photoSrc})` }}
            ></div>
            <div className="det">
              <p className="year">
                {detail.year}
                <MdLocalMovies /> {detail.type} - PG
              </p>
            </div>
            <h1>{detail.movieName}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Recomands;
