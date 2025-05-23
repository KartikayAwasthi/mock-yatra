import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import GetPro from "./components/GetPro";
import ExamDetail from "./components/ExamDetail";
import AboutPage from "./components/AboutPage";
import TestSeriesPage from "./components/TestSeriesPage";
import TestInstructionsPage from "./components/TestInstructionsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/get-pro" element={<GetPro />} />
        <Route path="/exam/:examId" element={<ExamDetail />} />
        <Route path="/test-series" element={<TestSeriesPage />} />
        <Route
          path="/test-instructions/:testId"
          element={<TestInstructionsPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
