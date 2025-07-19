import React from 'react';
import { Link, useRouteError } from 'react-router';
import { FaLeaf } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-green-200 px-4 py-10">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <FaLeaf className="text-green-500 text-5xl animate-pulse" />
        </div>
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-2">
          Sorry, something went wrong or this page doesn't exist.
        </p>
        {error?.statusText || error?.message ? (
          <p className="text-sm text-red-500 mt-2">
            Error: {error.statusText || error.message}
          </p>
        ) : null}

        <Link
          to="/"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
