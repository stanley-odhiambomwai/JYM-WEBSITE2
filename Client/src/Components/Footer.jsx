const Footer = () => {
    return (
      <footer className=" bg-gray-900 text-white  mt-auto ">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-lg font-semibold">
            "Every rep, every step, every drop of sweat brings you closer to the best version of yourself."
          </p>
  
          <div className="flex space-x-6 mt-4">
            <a href="https://x.com/Stanleymwai1481" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-blue-400 transition"></i>
            </a>
            <a href="https://www.linkedin.com/in/stanley-odhiambo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-blue-500 transition"></i>
            </a>
            <a href="https://www.instagram.com/stanleyodhiambomwai/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-pink-500 transition"></i>
            </a>
            <a href="https://github.com/stanley-odhiambomwai" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-gray-400 transition"></i>
            </a>
          </div>
  
          <p className="text-sm text-gray-400 mt-4">
            © {new Date().getFullYear()} JYM Fitness. Stay strong. Stay inspired.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  