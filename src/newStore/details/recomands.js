import { MdLocalMovies } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BeatLoader } from "react-spinners";

import { changePlay, setDefault, pushToMarked, bookmarked } from "../functions";
import { useState } from "react";

const Recomands = ({
  movieDetails,
  setMovieDetails,
  marked,
  searchTrends,
  setSearchTrends,
  trend,
}) => {
  const [hoverT1, setHoverT1] = useState(false);
  const [hoverT2, setHoverT2] = useState(false);
  const [hoverT3, setHoverT3] = useState(false);
  function setHover(setUnDefault) {
    setUnDefault(true);
  }
  function setDeHover(setDefault) {
    setDefault(false);
  }
  return (
    <div className="main">
      <div className="search">
        <IoSearch className="ico" />
        <input
          type="text"
          value={searchTrends}
          onChange={(e) => setSearchTrends(e.target.value)}
          placeholder="Search for movies or TV series"
        />
      </div>
      <div className="tranding">
        <h1 className="head">Trending</h1>
        <ul>
          <li
            onMouseEnter={() => setHover(setHoverT1)}
            onMouseLeave={() => setDeHover(setHoverT1)}
            style={
              !hoverT1
                ? { backgroundImage: "url(imgs/rec1.png)" }
                : {
                    backgroundImage:
                      " linear-gradient(#00000040,#00000040),url(imgs/rec1.png)",
                  }
            }
          >
            <div className="trand-icon-cell">
              <FaRegBookmark className="trand-icon" />
            </div>
            {hoverT1 && (
              <button className="trad-play">
                <IoIosPlayCircle className="icon-b" />
                Play
              </button>
            )}

            <div className="det">
              <p className="year">
                2019 <MdLocalMovies />
                movie - PG
              </p>
            </div>
            <h1>Beyond Earth</h1>
          </li>
          <li
            onMouseEnter={() => setHover(setHoverT2)}
            onMouseLeave={() => setDeHover(setHoverT2)}
            style={
              !hoverT2
                ? { backgroundImage: "url(imgs/rec2.png)" }
                : {
                    backgroundImage:
                      "linear-gradient(#00000040,#00000040),url(imgs/rec2.png)",
                  }
            }
          >
            <div className="trand-icon-cell">
              <FaRegBookmark className="trand-icon" />
            </div>
            {hoverT2 && (
              <button className="trad-play">
                <IoIosPlayCircle className="icon-b" />
                Play
              </button>
            )}
            <div className="det">
              <p className="year">
                2021 <MdLocalMovies />
                movie - PG
              </p>
            </div>
            <h1>Bottom Gear</h1>
          </li>
          <li
            onMouseEnter={() => setHover(setHoverT3)}
            onMouseLeave={() => setDeHover(setHoverT3)}
            style={
              !hoverT3
                ? { backgroundImage: "url(imgs/rec3.png)" }
                : {
                    backgroundImage:
                      "linear-gradient(#00000040,#00000040),url(imgs/rec3.png)",
                  }
            }
          >
            <div className="trand-icon-cell">
              <FaRegBookmark className="trand-icon" />
            </div>
            {hoverT3 && (
              <button className="trad-play">
                <IoIosPlayCircle className="icon-b" />
                Play
              </button>
            )}
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
        {!trend ? (
          movieDetails.map((detail) => (
            <li key={detail.imdbID}>
              <div
                onMouseEnter={() =>
                  changePlay(detail.imdbID, setMovieDetails, movieDetails)
                }
                onMouseLeave={() =>
                  setDefault(detail.imdbID, setMovieDetails, movieDetails)
                }
                className="list"
                style={
                  detail.play === true
                    ? {
                        backgroundImage: `
                linear-gradient(#00000040,#00000040),url(${detail.Poster})`,
                      }
                    : {
                        backgroundImage: `
                url(${detail.Poster})`,
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
                <div
                  className="bookmark-cell"
                  onClick={() =>
                    bookmarked(detail.imdbID, setMovieDetails, movieDetails)
                  }
                >
                  {detail.isBookMarked ? (
                    <BsBookmarkFill className="bookmark" />
                  ) : (
                    <FaRegBookmark
                      className="bookmark"
                      onClick={() =>
                        pushToMarked(detail.imdbID, movieDetails, marked)
                      }
                    />
                  )}
                </div>
              </div>
              <div className="det">
                <p className="year">
                  {detail.year}
                  <MdLocalMovies /> {detail.Type} - PG
                </p>
              </div>
              <h1>{detail.Title}</h1>
            </li>
          ))
        ) : (
          <h1 className="loader">
            <BeatLoader color="white" />
          </h1>
        )}
      </ul>
    </div>
  );
};
export default Recomands;
