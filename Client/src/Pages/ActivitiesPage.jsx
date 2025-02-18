import React from "react";
import Header from "../Components/Header";
import Activities from "../Components/Activities";
import Footer from "../Components/Footer";

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white mt-30">
      <Header
        heading="JYM Activities"
        paragraph="View the latest and previous activities."
        linkName="Dashboard"
        linkUrl="/dashboard"
      />
      <Activities />
      <Footer />
    </div>
  );
}
