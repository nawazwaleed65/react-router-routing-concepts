import { Link, Outlet } from "react-router-dom";

function LinkFunc() {
  return (
    <>
      <div className="flex justify-between items-center bg-blue-500 text-white px-8 py-4 shadow-md">
        <div className="text-2xl font-bold hover:text-yellow-300 transition-colors">
          <Link to="/">Logo</Link>
        </div>

        <div>
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/nested"
                className="hover:text-yellow-300 transition-colors"
              >
                Nested Route
              </Link>
            </li>
            <li>
              <Link
                to="/dynamic"
                className="hover:text-yellow-300 transition-colors"
              >
                Dynamic Route
              </Link>
            </li>
            <li>
              <Link
                to="/dynamic/optional"
                className="hover:text-yellow-300 transition-colors"
              >
                Optional Segment
              </Link>
            </li>
            <li>
              <Link
                to="/pak/user/login"
                className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default LinkFunc;
