import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.warning("Logout Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn px-1 btn-ghost lg:hidden"
          >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">All Reviews</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-review">Add Review</NavLink>
                </li>
                <li>
                  <NavLink to="/my-reviews">My Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/game-watchlist">Game Watchlist</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn px-2 btn-ghost text-xl md:text-2xl md:font-bold"
        >
          Chill Gamer
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/reviews">All Reviews</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/add-review">Add Review</NavLink>
              </li>
              <li>
                <NavLink to="/my-reviews">My Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/game-watchlist">Game Watchlist</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="join">
            <button
              className="btn btn-ghost tooltip tooltip-left"
              data-tip={user.displayName}
            >
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 rounded-full"
              />
            </button>
            <button className="btn btn-error text-white" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="join">
            <a
              href="/login"
              className="btn px-2 md:px-4 btn-primary text-white join-item"
            >
              Login
            </a>
            <a
              href="/register"
              className="btn px-2 md:px-4 btn-success text-white join-item"
            >
              Register
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
