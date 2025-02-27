import React from "react";
import Header from "../Components/Header";
import ProgressTracker from "../Components/ProgressTracker";
import Footer from "../Components/Footer";

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-[url(./src/Images/im15.webp)] bg-cover pt-30">
      <Header
        heading="Progress Tracker"
        paragraph="Keep track of your daily exercise progress."
        linkName="Dashboard"
        linkUrl="/dashboard"
      />
      <ProgressTracker />
      <Footer />

    </div>
  );
}
