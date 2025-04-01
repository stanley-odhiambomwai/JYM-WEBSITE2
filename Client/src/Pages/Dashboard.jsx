import React from "react";
import Header from "../Components/Header";
import Dashboard from "../Components/Dashboard";
import Footer from "../Components/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[url(/Images/im13.webp)] bg-cover bg-no-repeat mt-20">
      <Header heading="Dashboard" paragraph="View gym activities in detail." />
      <Dashboard />
      <Footer />
    </div>
  );
}
