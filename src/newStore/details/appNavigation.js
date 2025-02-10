import { MdWindow } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { BsBookmarkFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav>
      <ul>
        <button>
          <MdMovie className="link1" />
        </button>
        <li>
          <NavLink to={"/"}>
            <MdWindow className="link" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/movies"}>
            <MdLocalMovies className="link" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tvseries"}>
            <TbDeviceTvOld className="link" />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/bookmark"}>
            <BsBookmarkFill className="link" />
          </NavLink>
        </li>
      </ul>
      <img src="imgs/nav.jpeg" alt="yo" />
    </nav>
  );
};
export default AppNav;
