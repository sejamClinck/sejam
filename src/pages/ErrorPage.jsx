import { Link, useRouteError } from "react-router-dom";
import { Frown, AlertTriangle, Home, RotateCcw, Smile } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();
  const isNotFound = error.status === 404;

  const getErrorContent = (status) => {
    switch (status) {
      case 404:
        return {
          title: "Oops! This tooth is missing",
          subtitle: "404 - Page Not Found",
          message:
            "Looks like this page has been extracted! Don't worry, we have plenty of other healthy pages for you to browse.",
          icon: <Frown size={100} className="text-blue-400" />,
        };
      default:
        return {
          title: "We hit a nerve!",
          subtitle: `${status || 500} - Something went wrong`,
          message:
            "Our digital dental tools encountered an unexpected cavity. Our code dentists are working on a root canal to fix it!",
          icon: <AlertTriangle size={100} className="text-yellow-400" />,
        };
    }
  };

  const { title, subtitle, message, icon } = getErrorContent(error.status);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center px-4">
      <div className="mb-8 relative">
        <div className="w-64 h-64 bg-white rounded-full border-8 border-blue-300 flex items-center justify-center overflow-hidden">
          {icon}
          <div className="absolute bottom-0 w-full h-16 bg-yellow-200 flex justify-center items-end">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-6 h-8 mx-1 bg-white rounded-t-full" />
            ))}
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
        {title}
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        {subtitle}
      </h2>

      <p className="text-xl text-gray-600 mb-8 max-w-md">{message}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-blue-600 transition duration-300"
        >
          <Home size={20} className="mr-2" />
          Back to Reception
        </Link>
        {isNotFound ? (
          <Link
            to="/services"
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-green-600 transition duration-300"
          >
            <Smile size={20} className="mr-2" />
            View Our Services
          </Link>
        ) : (
          <button
            onClick={() => window.location.reload()}
            className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-green-600 transition duration-300"
          >
            <RotateCcw size={20} className="mr-2" />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
