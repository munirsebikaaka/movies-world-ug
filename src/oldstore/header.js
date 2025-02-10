import { IoIosPlayCircle } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";

import Search from "../newStore/details/search";
import AppNav from "../newStore/details/appNavigation";

const BookMarks = ({ marked, setMarked }) => {
  function del(id) {
    const [element] = marked.filter((el) => el.id === id);
    if (element) {
      setMarked((marked = marked.filter((el) => el.id !== id)));
    }
    console.log(element);
  }
  return (
    <div className="container">
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
                  <div className="bookmark-cell" onClick={() => del(el.id)}>
                    <BsBookmarkFill className="bookmark" />
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
