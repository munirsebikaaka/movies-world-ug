import { MdWindow } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { BsBookmarkFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav>
      <button className="outer-btn">
        <MdMovie className="link1" />
      </button>
      <ul>
        <button className="inner-btn">
          <MdMovie className="link1" />
        </button>
        <li>
          <NavLink to={"/"} className="link">
            <MdWindow />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/movies"} className="link">
            <MdLocalMovies />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tvseries"} className="link">
            <TbDeviceTvOld />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/bookmark"} className="link">
            <BsBookmarkFill />
          </NavLink>
        </li>
      </ul>
      <img src="imgs/nav.jpeg" alt="yo" />
    </nav>
  );
};
export default AppNav;
