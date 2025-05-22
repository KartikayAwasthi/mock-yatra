import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import GetPro from "./components/GetPro";
import ExamDetail from "./components/ExamDetail";

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
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
