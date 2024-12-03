
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h1 className="text-6xl font-bold text-red-500 mb-4">NOT FOUND</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="btn btn-secondary rounded-lg">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
