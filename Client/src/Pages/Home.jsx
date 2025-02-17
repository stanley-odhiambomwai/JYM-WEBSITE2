import { Link } from "react-router";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url(./src/Images/im7.webp)] text-white bg-cover bg-no-repeat p-6">
      <h1 className="text-5xl font-bold mb-6 mt-10">Welcome to JYM Website.! <i className="text-amber-500  hover:text-purple-600 inline-block">The path to your fitness.</i></h1>
      <p className="text-lg text-center mb-6">
        Join our platform to stay fit, track your progress, and interact with a vibrant community.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/register"
          className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500"
        >
          Sign In
        </Link>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
