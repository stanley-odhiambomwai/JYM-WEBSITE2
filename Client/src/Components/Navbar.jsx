// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-[url(/Images/im12.jpg)] p-4 text-white fixed top-0 left-0 w-full">
      <ul className="flex space-x-4">
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/register">Register</Link></li>
        <li className=""><Link to="/login">Login</Link></li>
        <li className=""><Link to="/activities">Activities</Link></li>
        <li className=""><Link to="/dashboard">Dashboard</Link></li>
        <li className=""><Link to="/progress">Progress</Link></li>
        <li className=""><Link to="/community">Community</Link></li>
        <div className="w-17 h-15 rounded-full shadow-md transition duration-300 hover:shadow-lg hover:shadow-gray-400 ">
          <img src="./src/Images/im12.jpg"/>
        </div>
        <div  className="flex justify-end text-3xl space-x-4 container mx-auto">
            <li><Link to="https://x.com/Stanleymwai1481" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl  transition  "></i> Twiter
            </Link></li>
           <li> <Link to="https://www.linkedin.com/in/stanley-odhiambo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl  transition "></i>LinkedIn
            </Link></li>
            <li><Link to="https://www.instagram.com/stanleyodhiambomwai/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-pi transition "></i>Instagram
            </Link></li>
            <li></li><Link to="https://github.com/stanley-odhiambomwai" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl  transition "></i>Github
            </Link>

            </div>
      </ul>
    </nav>
  );
};

export default Navbar;
