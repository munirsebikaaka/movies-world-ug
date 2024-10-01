function Header() {
  return (
    <div>
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
  return <input type="text" placeholder="input move name" />;
}
function NumberOfMovies() {
  return <p>Codesmann movies</p>;
}
export default Header;
