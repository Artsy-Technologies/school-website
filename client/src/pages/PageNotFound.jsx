import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-800 bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
