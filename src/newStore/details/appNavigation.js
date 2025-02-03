import { MdWindow } from "react-icons/md";
import { MdMovie } from "react-icons/md";

import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { BsBookmarkFill } from "react-icons/bs";

const AppNav = () => {
  return (
    <nav>
      <MdMovie className="link1" />
      <ul>
        <li>
          <MdWindow className="link" />
        </li>
        <li>
          <MdLocalMovies className="link" />
        </li>
        <li>
          <TbDeviceTvOld className="link" />
        </li>
        <li>
          <BsBookmarkFill className="link" />
        </li>
      </ul>
    </nav>
  );
};
export default AppNav;
