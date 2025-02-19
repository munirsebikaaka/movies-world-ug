import { MdLocalMovies } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BeatLoader } from "react-spinners";

import AppNav from "../newStore/details/appNavigation";
import {
  bookmarked,
  changePlay,
  pushToMarked,
  setDefault,
} from "../newStore/functions";

const Movies = ({
  marked,
  movies,
  setMovies,
  searchMovies,
  setSearchMovies,
  movie,
}) => {
  return (
    <div className="container">
      <AppNav />
      <div className="main">
        <div className="search">
          <IoSearch className="ico" />
          <input
            type="text"
            value={searchMovies}
            onChange={(e) => setSearchMovies(e.target.value)}
            placeholder="Search for movies or TV series"
          />
        </div>
        <h1 className="head">Movies</h1>
        <ul className="movies-list">
          {!movie ? (
            movies.map((detail) => (
              <li key={detail.imdbID}>
                <div
                  onMouseEnter={() =>
                    changePlay(detail.imdbID, setMovies, movies)
                  }
                  onMouseLeave={() =>
                    setDefault(detail.imdbID, setMovies, movies)
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
                    onClick={() => bookmarked(detail.imdbID, setMovies, movies)}
                  >
                    {detail.isBookMarked ? (
                      <BsBookmarkFill className="bookmark" />
                    ) : (
                      <FaRegBookmark
                        className="bookmark"
                        onClick={() =>
                          pushToMarked(detail.imdbID, movies, marked)
                        }
                      />
                    )}
                  </div>
                </div>
                <div className="det">
                  <p className="year">
                    {detail.Year}
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
    </div>
  );
};
export default Movies;
