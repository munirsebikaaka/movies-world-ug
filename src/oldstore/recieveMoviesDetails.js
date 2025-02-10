import { MdLocalMovies } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import Search from "../newStore/details/search";
import AppNav from "../newStore/details/appNavigation";

const TVSeries = ({ recImgs, setRecImgs, marked }) => {
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
  }
  return (
    <div className="container">
      <AppNav />
      <div className="main">
        <Search />
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
                  <FaRegBookmark
                    className="bookmark"
                    onClick={() => pushToMarked(detail.id)}
                  />
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
    </div>
  );
};
export default TVSeries;
