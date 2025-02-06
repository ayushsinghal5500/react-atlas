import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Something went wrong.</p>
      <p className="text-gray-600 mb-4">
        {error?.statusText || error?.message || "Page not found."}
      </p>
      <Link
        to="/"
        className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
