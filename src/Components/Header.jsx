import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        toast.success("user logged out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#331A15] border-[#331A15] border-2 px-2 py-1 rounded-lg"
            : " text-[#331A15]"
        }
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        to="/allCraft"
        className={({ isActive }) =>
          isActive
            ? "text-[#331A15] border-[#331A15] border-2 px-2 py-1 rounded-lg"
            : " text-[#331A15]"
        }
      >
        <li>
          <a> All Art & craft Items</a>
        </li>
      </NavLink>
      <NavLink
        to="/addCraft"
        className={({ isActive }) =>
          isActive
            ? "text-[#331A15] border-[#331A15] border-2 px-2 py-1 rounded-lg"
            : " text-[#331A15]"
        }
      >
        <li>
          <a>Add Craft Item</a>
        </li>
      </NavLink>
      <NavLink
        to="/list"
        className={({ isActive }) =>
          isActive
            ? "text-[#331A15] border-[#331A15] border-2 px-2 py-1 rounded-lg"
            : " text-[#331A15]"
        }
      >
        <li>
          <a>My Art & Craft List</a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-4">
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
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className=" lg:text-3xl font-semibold text-[text-[#331A15]]">
          CreativeCanvasHub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" space-x-7 flex items-center menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_7Nr1EC397vWcF9rTCB5DVERMFhc1LewgmbF2yyVHj1tTz4m5XGnCfX8O72BlNQ2aiA&usqp=CAU"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44"
            >
              <li>
                <a className="justify-between">{user?.displayName  || 'Rakib Hossen'}  </a>
              </li>

              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-3">
            <Link
              to="/login"
              className="lg:px-6 px-3 py-2 text-white rounded-md bg-[#E3B577]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className=" lg:px-6 px-2 text-white py-2 rounded-md bg-[#E3B577]"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
