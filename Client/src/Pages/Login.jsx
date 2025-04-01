// src/pages/Login.jsx
import React from "react";
import Header from "../Components/Header";
import Input from "../Components/Input";
import FormAction from "../Components/FormAction";
import Footer from "../Components/Footer";

export default function LoginPage() {
 
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[url(/Images/im19.jpeg)] bg-cover bg-no-repeat ">
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Register"
        linkUrl="/register"
      />
      <form className="w-full max-w-md " onSubmit={handleSubmit}>
        <Input
        className="text-white"
          handleChange={handleChange}
          value={formData.email}
          labelText="Email address"
          labelFor="email"
          id="email"
          name="email"
          type="email"
          isRequired={true}
          placeholder="Enter your email"
        />
        <Input
          handleChange={handleChange}
          value={formData.password}
          labelText="Password"
          labelFor="password"
          id="password"
          name="password"
          type="password"
          isRequired={true}
          placeholder="Enter your password"
        />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
      <Footer />
    </div>
  );
}
