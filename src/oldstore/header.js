import { IoIosPlayCircle } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import Search from "../newStore/details/search";
import AppNav from "../newStore/details/appNavigation";

const BookMarks = ({ marked }) => {
  return (
    <div>
      <AppNav />
      <div className="main">
        <Search />
        <h1 className="head">Bookmarked Movies</h1>
        {marked.length < 1 ? (
          <p>Bookmarks still EMPTY</p>
        ) : (
          <ul className="movies-list">
            {marked.map((el) => (
              <li key={el.movieName}>
                <div
                  className="list"
                  style={
                    el.play === true
                      ? {
                          backgroundImage: `
                  linear-gradient(#00000040,#00000040),url(${el.photoSrc})`,
                        }
                      : {
                          backgroundImage: `
                  url(${el.photoSrc})`,
                        }
                  }
                >
                  {el.play ? (
                    <button className="play">
                      <IoIosPlayCircle className="icon-b" />
                      Play
                    </button>
                  ) : (
                    ""
                  )}
                  <div className="bookmark-cell">
                    <FaRegBookmark className="bookmark" />
                  </div>
                </div>
                <div className="det">
                  <p className="year">
                    {el.year}
                    <MdLocalMovies /> {el.type} - PG
                  </p>
                </div>
                <h1>{el.movieName}</h1>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default BookMarks;
