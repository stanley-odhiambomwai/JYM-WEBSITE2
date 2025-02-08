import React from "react";
import Header from "../Components/Header";
import Activities from "../Components/Activities";

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        heading="JIM Activities"
        paragraph="View the latest and previous activities."
        linkName="Dashboard"
        linkUrl="/dashboard"
      />
      <Activities />
    </div>
  );
}
