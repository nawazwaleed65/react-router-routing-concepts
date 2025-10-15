function PrefixFunc() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Login Page</h2>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default PrefixFunc;
