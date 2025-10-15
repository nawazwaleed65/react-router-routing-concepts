import { Link, useParams } from "react-router-dom";

function DynamicFunc2() {
  const paraData = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-300 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">User Details</h1>
        <h2 className="text-xl text-gray-700 mb-6">
          My ID is: <span className="font-semibold text-blue-800">{paraData.id}</span>
        </h2>

        {paraData.name && (
          <h2 className="text-lg text-gray-600 mb-4">
            My Name is: <span className="font-medium text-blue-700">{paraData.name}</span>
          </h2>
        )}

        <Link
          to="/dynamic"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default DynamicFunc2;
