

const Navbar = () => {
    return (
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn px-1 btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/all-reviews">All Reviews</a>
              </li>
              <li>
                <a href="/add-reviews">Add Review</a>
              </li>
              <li>
                <a href="/my-reviews">My Reviews</a>
              </li>
              <li>
                <a href="/game-watchlist">Game Watchlist</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn px-2 btn-ghost text-xl md:text-2xl md:font-bold">
            Chill Gamer
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/all-reviews">All Reviews</a>
            </li>
            <li>
              <a href="/add-reviews">Add Review</a>
            </li>
            <li>
              <a href="/my-reviews">My Reviews</a>
            </li>
            <li>
              <a href="/game-watchlist">Game Watchlist</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="join">
            <button className="btn px-2 md:px-4 btn-info text-white join-item">Login</button>
            <button className="btn px-2 md:px-4 btn-success text-white join-item">Register</button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;