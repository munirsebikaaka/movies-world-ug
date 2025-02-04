import { useState } from "react";
import Login from "./newStore/login";
import SignIn from "./newStore/signIn";
import HOME from "./newStore/details/home";
import BookMarks from "./oldstore/header";
import TVSeries from "./oldstore/recieveMoviesDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./oldstore/moviesInfor";

function App() {
  const [movieDetails, setMovieDetails] = useState([{}]);
  const [movieDetails2, setMovieDetails2] = useState([{}]);
  const [marked, setMarked] = useState([]);
  const [acounts, setAcounts] = useState([
    {
      name: "codes",
      email: "co@gmail.com",
      phone: "0742083075",
      password: "codes",
    },
  ]);
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
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HOME
                recImgs={recImgs}
                setRecImgs={setRecImgs}
                movieDetails={movieDetails}
                setMovieDetails={setMovieDetails}
                movieDetails2={movieDetails2}
                setMovieDetails2={setMovieDetails2}
                marked={marked}
                setMarked={setMarked}
              />
            }
          />
          <Route path="movies" element={<Movies recImgs={recImgs} />} />
          <Route path="tvseries" element={<TVSeries recImgs={recImgs} />} />
          <Route path="bookmark" element={<BookMarks marked={marked} />} />
        </Routes>
      </BrowserRouter>

      {/* <Login acounts={acounts} /> */}
      {/* <SignIn acounts={acounts} setAcounts={setAcounts} /> */}
    </div>
  );
}

export default App;
