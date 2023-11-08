import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold text-primary mx-2" : "mx-2"
        }
      >
        Course
      </NavLink>
      <NavLink
        to="/sponsor-child"
        className={({ isActive }) =>
          isActive ? "font-bold text-primary " : "mx-2"
        }
      >
        Dashboard
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <h3 className="text-primary text-xl font-bold">Skill Spectrum</h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-primary text-white btn-sm">Login</a>
      </div>
    </div>
  );
}
