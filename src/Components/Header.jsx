
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
            : "font bold"
        }
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to='/allCraft' className={({ isActive }) =>
          isActive
            ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
            : "font bold"
        }>
        <li>
          <a> All Art & craft Items</a>
        </li>
      </NavLink>
      <NavLink to='/addCraft' className={({ isActive }) =>
          isActive
            ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
            : "font bold"
        }>
        <li>
          <a>Add Craft Item</a>
        </li>
      </NavLink>
      <NavLink to='/list' className={({ isActive }) =>
          isActive
            ? "text-[#00BCD4] border-[#00BCD4] border-2 px-2 py-1 rounded-lg"
            : "font bold"
        }>
        <li>
          <a>My Art & Craft List</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className=" lg:text-3xl font-semibold">CreativeCanvasHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" space-x-7 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <Link to='/login' className="px-6 py-2 text-white rounded-md bg-[#4DD0E1]">Login</Link>
        <Link to='/register' className=" px-6 text-white py-2 rounded-md bg-[#4DD0E1]">Register</Link>
      </div>
    </div>
  );
};

export default Header;
