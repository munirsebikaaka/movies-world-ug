function Header({ onMovies, onGetMovie, onSetGetMovie }) {
  return (
    <div className="nav-bar">
      <Logo />
      <InputMovies onGetMovie={onGetMovie} onSetGetMovie={onSetGetMovie} />
      <NumberOfMovies onMovies={onMovies} />
    </div>
  );
}
function Logo() {
  return <h1 className="logo">CodesmannDev</h1>;
}
function InputMovies({ onGetMovie, onSetGetMovie }) {
  return (
    <input
      type="text"
      value={onGetMovie}
      onChange={(e) => onSetGetMovie(e.target.value)}
      placeholder="Input movie name"
      className="search"
    />
  );
}
function NumberOfMovies({ onMovies }) {
  return <p className="num-results"> {onMovies?.length} movies found</p>;
}
export default Header;
