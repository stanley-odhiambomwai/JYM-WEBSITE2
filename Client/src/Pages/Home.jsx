import { Link } from "react-router";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url(./src/Images/im7.webp)] text-white bg-cover bg-no-repeat p-6">
      <h1 className="text-5xl font-bold mb-6">Welcome to JYM Website.! The path to your fitness.</h1>
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
