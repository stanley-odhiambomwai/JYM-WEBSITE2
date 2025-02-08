import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold mb-6">Welcome to JIM</h1>
      <p className="text-lg text-center mb-6">
        Join our platform to stay fit, track your progress, and interact with a vibrant community.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/register"
          className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Home;
