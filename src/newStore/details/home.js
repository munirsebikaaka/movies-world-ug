import AppNav from "./appNavigation";
import Recomands from "./recomands";

const HOME = ({
  recImgs,
  setRecImgs,
  movieDetails,
  setMovieDetails,
  movieDetails2,
  setMovieDetails2,
  marked,
  setMarked,
  setShowApp,
}) => {
  return (
    <div className="home">
      <AppNav setShowApp={setShowApp} />
      <Recomands
        recImgs={recImgs}
        setRecImgs={setRecImgs}
        movieDetails={movieDetails}
        setMovieDetails={setMovieDetails}
        movieDetails2={movieDetails2}
        setMovieDetails2={setMovieDetails2}
        marked={marked}
        setMarked={setMarked}
      />
    </div>
  );
};

export default HOME;
