function Header() {
  return (
    <div className="nav-bar">
      <Logo />
      <InputMovies />
      <NumberOfMovies />
    </div>
  );
}
function Logo() {
  return <h1 className="logo">CodesmannDev</h1>;
}
function InputMovies() {
  return <input type="text" placeholder="input move name" className="search" />;
}
function NumberOfMovies() {
  return <p className="num-results">Codesmann movies</p>;
}
export default Header;
