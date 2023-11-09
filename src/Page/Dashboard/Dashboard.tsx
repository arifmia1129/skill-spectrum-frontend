import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  const menuItems = (
    <>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive ? "font-bold text-primary mx-2" : "mx-2"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/dashboard/my-enrollment"
        className={({ isActive }) =>
          isActive ? "font-bold text-primary mx-2" : "mx-2"
        }
      >
        My Enrollment
      </NavLink>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden m-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
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
      <div className="drawer-content p-2">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {menuItems}
        </ul>
      </div>
    </div>
  );
}
