import { Link } from "react-router-dom";

function DynamicFunc() {
  const userData = [
    { id: 1, name: "waleed" },
    { id: 2, name: "ali" },
    { id: 3, name: "azam" },
    { id: 4, name: "hamza" },
    { id: 5, name: "wahaj" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Dynamic & Optional Routing
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Dynamic Routes */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Dynamic Routes
          </h2>
          <div className="flex flex-col space-y-3">
            {userData.map((item) => (
              <Link
                key={item.id}
                to={`/dynamic/${item.id}`}
                className="px-4 py-2 bg-blue-100 rounded-lg text-blue-700 hover:bg-blue-200 hover:text-blue-900 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Optional Segment */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Optional Segment
          </h2>
          <div className="flex flex-col space-y-3">
            {userData.map((item) => (
              <Link
                key={item.id}
                to={`/dynamic/${item.id}/${item.name}`}
                className="px-4 py-2 bg-green-100 rounded-lg text-green-700 hover:bg-green-200 hover:text-green-900 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicFunc;
