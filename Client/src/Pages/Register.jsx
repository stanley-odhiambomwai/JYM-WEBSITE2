import React from "react";
import Header from "../Components/Header";
import Registration from "../Components/Registration";
import Footer from "../Components/Footer";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center mt-20">
      <Header 
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
