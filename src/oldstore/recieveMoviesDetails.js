import { MdLocalMovies } from "react-icons/md";
import { IoIosPlayCircle } from "react-icons/io";
import { BsBookmarkFill } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import Search from "../newStore/details/search";
import AppNav from "../newStore/details/appNavigation";

const TVSeries = ({ recImgs }) => {
  return (
    <div>
      <AppNav />
      <div className="main">
        <Search />
        <h1 className="head">Recomanded for you</h1>
        <ul className="movies-list">
          {recImgs.map((detail) => (
            <li key={detail.movieName}>
              <div
                // onMouseEnter={() => changePlay(detail.id)}
                // onMouseLeave={() => setDefault(detail.id)}
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
                    // onClick={() => pushToMarked(detail.id)}
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
