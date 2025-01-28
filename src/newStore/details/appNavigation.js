import { MdWindow } from "react-icons/md";
import { MdMovie } from "react-icons/md";

import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { BsBookmarkFill } from "react-icons/bs";

const AppNav = () => {
  return (
    <nav>
      <MdMovie />
      <ul>
        <li>
          <MdWindow />
        </li>
        <li>
          <MdLocalMovies />
        </li>
        <li>
          <TbDeviceTvOld />
        </li>
        <li>
          <BsBookmarkFill />
        </li>
      </ul>
    </nav>
  );
};
export default AppNav;
