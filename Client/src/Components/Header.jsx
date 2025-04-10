// src/components/Header.jsx
import { Link } from "react-router";

const Header = ({ heading, paragraph, linkName, linkUrl }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt="Logo"
          className="h-14 w-14"
          src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
        {heading}
      </h2>
      <p className="mt-5 text-center text-sm text-white">
        {paragraph}{" "}
        <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
