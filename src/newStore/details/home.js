import AppNav from "./appNavigation";
import Recomands from "./recomands";

const HOME = ({
  movieDetails,
  setMovieDetails,
  marked,
  setMarked,
  setShowApp,
  searchTrends,
  setSearchTrends,
  trend,
  // setTrend,
}) => {
  return (
    <div className="home">
      <AppNav setShowApp={setShowApp} />
      <Recomands
        movieDetails={movieDetails}
        setMovieDetails={setMovieDetails}
        marked={marked}
        setMarked={setMarked}
        searchTrends={searchTrends}
        setSearchTrends={setSearchTrends}
        trend={trend}
        // setTrend={setTrend}
      />
    </div>
  );
};

export default HOME;
