import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { EXAMS, POPULAR_TESTS, HERO_IMAGE } from "../constants";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 text-gray-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-500 to-green-400">
            Practice Mock Tests for All Competitive Exams
          </h1>
          <p className="text-lg text-gray-700 max-w-md">
            UPSC, SSC, Banking, Railway, Defense, State PSCs & more — Prepare
            with confidence, anytime, anywhere.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition">
              Start Free Test
            </button>
            <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition">
              Explore Test Series
            </button>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          {/* Placeholder for hero image or illustration */}
          <img
            src={HERO_IMAGE}
            alt="Mock Test Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Exam Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">
          Popular Exam Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {EXAMS.map(({ name, icon }) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition"
              onClick={() => navigate(`/exam/${encodeURIComponent(name)}`)}
            >
              <div className="text-5xl mb-3">{icon}</div>
              <div className="text-center font-semibold text-gray-800">
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-800">
          Why Choose Mock Yatra?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-cyan-600">📚</div>
            <h3 className="font-semibold text-xl mb-2">Comprehensive Tests</h3>
            <p className="text-gray-700">
              Extensive test library for multiple exams, regularly updated.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-cyan-600">📊</div>
            <h3 className="font-semibold text-xl mb-2">
              Performance Analytics
            </h3>
            <p className="text-gray-700">
              Detailed reports & insights to help track your progress.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-cyan-600">💡</div>
            <h3 className="font-semibold text-xl mb-2">Expert Solutions</h3>
            <p className="text-gray-700">
              Step-by-step answers and explanations for better understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">
          Popular Mock Tests
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {POPULAR_TESTS.map(({ title, exam }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-cyan-600 font-medium">{exam}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-cyan-700 rounded-lg text-white text-center shadow-lg">
        <h2 className="text-4xl font-extrabold mb-4">
          Unlock Premium Features with Mock Yatra Pro
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-lg">
          Get unlimited access to exclusive mock tests, detailed solutions,
          personalized plans, and much more.
        </p>
        <button
          className="bg-white text-teal-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          onClick={() => navigate("/get-pro")}
        >
          Get Pro Now
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-gray-600 text-sm">
        © 2025 Mock Yatra. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
