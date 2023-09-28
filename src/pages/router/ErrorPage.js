import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div id="error-page" className="text-center">
        <h1 className="text-3xl font-semibold">Oops!</h1>
        <p className="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-sm">
          <i>{error ? error.statusText || error.message : ""}</i>
        </p>
        <Link to="/" className="text-blue-500 underline">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
