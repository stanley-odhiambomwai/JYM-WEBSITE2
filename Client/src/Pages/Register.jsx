import React from "react";
import Header from "../Components/Header";
import Registration from "../Components/Registration";
import Footer from "../Components/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[url(/Images/im3.webp)] bg-cover bg-no-repeat  flex flex-col justify-center pt-30 ">
      <Header 
      className="text-blue-100"
        heading="Register on JIM"
        paragraph="Already have an account? "
        linkName="Sign In"
        linkUrl="/login"
      />
      <Registration />
<Footer />
    </div>
  );
}
