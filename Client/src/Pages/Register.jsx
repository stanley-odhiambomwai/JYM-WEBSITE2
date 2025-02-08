import React from "react";
import Header from "../components/Header";
import Registration from "../components/Registration";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <Header 
        heading="Register on JIM"
        paragraph="Already have an account? "
        linkName="Sign In"
        linkUrl="/login"
      />
      <Registration />
    </div>
  );
}
