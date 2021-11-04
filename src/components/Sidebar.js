import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
// import Icon from "@material-tailwind/react/Icon";
// import H6 from "@material-tailwind/react/Heading6";
// import GroupIcon from "@mui/icons-material/Group";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
// import BurstModeIcon from "@mui/icons-material/BurstMode";
import { BiImages } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import logout from "./logout";
import { DashboardOutlined, PeopleOutlineSharp } from "@mui/icons-material";

export default function Sidebar({ isLogged, setisLogged }) {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const [Ticon, setTicon] = useState(<DashboardOutlined />);
  return (
    <div>
      <AdminNavbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        Ticon={Ticon}
        setTicon={setTicon}
      />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden bg-white w-64 z-50 py-4 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap relative flex justify-between">
          <div>
            <div
              className="flex flex-row relative justify-center align-center "
              style={{ margin: "15px 10px" }}
            >
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-center w-full inline-block"
              >
                <h1
                  className="text-gray-600 mb-3 "
                  style={{ marginRight: "60px" }}
                >
                  Toothfairy Admin
                </h1>
              </a>
              <div
                style={{ transform: "rotate(-90deg)", marginLeft: "40px" }}
                className="absolute right-0 "
              >
                <ExpandLessIcon className="transform rotate-45 text-xs mt-2  ml-3 cursor-pointer   text-gray-400 font-extralight	" />
              </div>
            </div>

            <hr className="my-4 min-w-full" />
            <div className="flex flex-col px-4 ">
              <ul className="flex-col min-w-full flex list-none">
                <li className="rounded-lg mb-4">
                  <NavLink
                    to="/dashboard"
                    onClick={() => setTicon(<DashboardOutlined />)}
                    exact
                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-black text-white shadow-md"
                  >
                    <DashboardOutlined />
                    Dashboard
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2 ">
                  <NavLink
                    to="/users"
                    onClick={() => setTicon(<PeopleOutlineSharp />)}
                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-black text-white shadow-md"
                  >
                    {/* <Icon name="toc" size="2xl" /> */}
                    <PeopleOutlineSharp />
                    Users
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2">
                  <NavLink
                    to="/detect"
                    onClick={() => setTicon(<ImageSearchIcon />)}
                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                    activeClassName="bg-black text-white shadow-md"
                  >
                    <ImageSearchIcon />
                    Detect
                  </NavLink>
                </li>
                <li className="rounded-lg mb-2 ">
                  <NavLink
                    to="/aitrack"
                    onClick={() => setTicon(<BiImages className="text-2xl" />)}
                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                    activeClassName="bg-black text-white shadow-md"
                  >
                    <BiImages className="text-2xl" />
                    AI Track
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="/" className="mt-2  text-center w-full inline-block" style ={{marginLeft:'30px'}}>
              <div className="pl-3 text-red-600 cursor-pointer ml-3 flex flew-row ">
                <MdLogout className=" mt-1" />
                <p className="ml-2 mb-1">Log out</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}