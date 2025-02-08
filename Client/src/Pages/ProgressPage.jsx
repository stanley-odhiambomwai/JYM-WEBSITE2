import React from "react";
import Header from "../Components/Header";
import ProgressTracker from "../Components/ProgressTracker";

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        heading="Progress Tracker"
        paragraph="Keep track of your daily exercise progress."
        linkName="Dashboard"
        linkUrl="/dashboard"
      />
      <ProgressTracker />
    </div>
  );
}
