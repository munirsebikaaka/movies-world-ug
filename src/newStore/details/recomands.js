import { MdLocalMovies } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import Search from "./search";

const Recomands = ({
  recImgs,
  setRecImgs,
  movieDetails,
  setMovieDetails,
  movieDetails2,
  setMovieDetails2,
  marked,
}) => {
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

  const changePlay = (id) => {
    setRecImgs(
      recImgs.map((items) =>
        items.id === id ? { ...items, play: true } : items
      )
    );
  };
  const setDefault = (id) => {
    setRecImgs(
      recImgs.map((items) =>
        items.id === id ? { ...items, play: false } : items
      )
    );
  };
  function pushToMarked(id) {
    recImgs.map((el) =>
      el.id === id
        ? marked.push({
            photoSrc: el.photoSrc,
            movieName: el.movieName,
            type: el.type,
            year: el.year,
            id: el.id,
            play: el.play,
          })
        : ""
    );
    recImgs.map((el) => el.isBookMarked === true);
  }

  return (
    <div className="main">
      <Search />
      <div className="tranding">
        <h1>Trending</h1>
        <ul>
          <li style={{ backgroundImage: "url(imgs/rec1.png)" }}>
            <div className="det">
              <p className="year">
                2019 <MdLocalMovies />
                movie - PG
              </p>
            </div>
            <h1>Beyond Earth</h1>
          </li>
          <li style={{ backgroundImage: "url(imgs/rec2.png)" }}>
            <div className="det">
              <p className="year">
                2021 <MdLocalMovies />
                movie - PG
              </p>
            </div>
            <h1>Bottom Gear</h1>
          </li>
          <li style={{ backgroundImage: "url(imgs/rec3.png)" }}>
            <div className="det">
              <p className="year">
                2019 <MdLocalMovies />
                TV-series - E
              </p>
            </div>
            <h1>Undiscovered Cities</h1>
          </li>
        </ul>
      </div>
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
                linear-gradient(#00000040,#00000040),url(${detail.photoSrc})`,
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
                </button>
              ) : (
                ""
              )}
              <div className="bookmark-cell">
                {detail.isBookMarked ? (
                  <BsBookmarkFill className="bookmark" />
                ) : (
                  <FaRegBookmark
                    className="bookmark"
                    onClick={() => pushToMarked(detail.id)}
                  />
                )}
              </div>
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
