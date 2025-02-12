
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import ActivitiesPage from "./Pages/ActivitiesPage";
import ProgressPage from "./Pages/ProgressPage";
import CommunityPage from "./Pages/CommunityPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/community" element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
