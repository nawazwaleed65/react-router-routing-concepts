import { Link, NavLink, Outlet } from "react-router-dom";

function NestedFunc() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Nested Routing</h1>

      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="text-white bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Go Back To Home
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 mb-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-100"
            } transition duration-300`
          }
        >
          Nested 1
        </NavLink>

        <NavLink
          to="nested2"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-100"
            } transition duration-300`
          }
        >
          Nested 2
        </NavLink>

        <NavLink
          to="nested3"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg font-medium ${
              isActive
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-100"
            } transition duration-300`
          }
        >
          Nested 3
        </NavLink>
      </div>

      {/* Render nested route components */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default NestedFunc;
