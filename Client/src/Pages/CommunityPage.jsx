import React from "react";
import Header from "../Components/Header";
import Community from "../Components/Community";
import Footer from "../Components/Footer";
export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white mt-20">
      <Header
        heading="Community"
        paragraph="Share your ideas and interact with fellow users."
        linkName="Dashboard"
        linkUrl="/dashboard"
      />
      <Community />
      <Footer />
    </div>
  );
}
