import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search">
      <IoSearch className="ico" />
      <input type="text" placeholder="Search for movies or TV series" />
    </div>
  );
};
export default Search;
