// Import required React and utility hooks and modules
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TEST_SERIES_LINK } from "../constants"; // Link to go back to test series list

const TestPage = () => {
  // Extract testId from URL using React Router
  const { testId } = useParams();
  const navigate = useNavigate();

  // State variables
  const [questions, setQuestions] = useState([]); // Stores fetched questions
  const [current, setCurrent] = useState(0); // Current question index
  const [answers, setAnswers] = useState({}); // User answers (key = questionId, value = selected option)
  const [flags, setFlags] = useState({}); // Flag status for each question
  const [timeLeft, setTimeLeft] = useState(3600); // Total time left in seconds (1 hour)
  const [loading, setLoading] = useState(true); // Is data loading
  const [submitLoading, setSubmitLoading] = useState(false); // Is test being submitted
  const [error, setError] = useState(""); // Error message

  // 🔁 Fetch test questions from API
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/tests/${testId}/questions`) // Backend endpoint
      .then((res) => {
        setQuestions(res.data || []); // Save questions
        setLoading(false);
      })
      .catch((err) => {
        // If fetching fails
        setError(
          "Unable to load questions for this test. Please try again later."
        );
        setLoading(false);
      });
  }, [testId]);

  // ⏱️ Timer countdown logic
  useEffect(() => {
    if (loading || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when time is up
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Decrease time every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, [loading, questions.length]);

  // ✅ Handle user selecting an option
  const handleOptionSelect = (qId, option) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  // 🚩 Toggle flag for a question
  const toggleFlag = (qId) => {
    setFlags((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  // 🕒 Format time into mm:ss
  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // 📨 Submit test manually or automatically
  const handleSubmit = () => {
    if (submitLoading) return;
    setSubmitLoading(true);

    axios
      .post(`/api/tests/${testId}/submit`, { answers }) // Submit answers
      .then(() => navigate("/result")) // Redirect to result page
      .catch(() => {
        setError("There was an error submitting your test. Please try again.");
      })
      .finally(() => setSubmitLoading(false));
  };

  // 💬 Show loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-cyan-700 font-semibold">
          Loading test...
        </div>
      </div>
    );
  }

  // ⚠️ Show error UI if API failed
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">{error}</h2>
          <button
            className="bg-cyan-600 text-white px-4 py-2 rounded"
            onClick={() => navigate(TEST_SERIES_LINK)}
          >
            Go to Test Series
          </button>
        </div>
      </div>
    );
  }

  // 📭 If there are no questions in the test
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-cyan-700">
            No Questions Available
          </h2>
          <p className="mb-4 text-gray-600">
            This test currently does not have any questions. Please check back
            later or try another test series.
          </p>
          <button
            className="bg-cyan-600 text-white px-4 py-2 rounded"
            onClick={() => navigate(TEST_SERIES_LINK)}
          >
            Go to Test Series
          </button>
        </div>
      </div>
    );
  }

  // 🧠 Current question based on index
  const currentQ = questions[current];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* 📌 Main Content Section */}
      <div className="flex-1 p-6">
        {/* 🔝 Top Header Bar with Title + Timer + Submit Button */}
        <div className="flex justify-between items-center bg-white p-4 rounded shadow mb-4">
          <h1 className="text-xl font-bold text-cyan-800">Mock Test</h1>
          <div className="text-lg font-mono text-red-600">
            ⏳ Time Left: {formatTime(timeLeft)}
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded disabled:opacity-60"
            onClick={handleSubmit}
            disabled={submitLoading}
          >
            {submitLoading ? "Submitting..." : "Submit Test"}
          </button>
        </div>

        {/* 🧾 Question and Options */}
        {currentQ && (
          <div className="bg-white p-6 rounded shadow mb-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold text-gray-700">
                Q{current + 1}: {currentQ.question}
              </h2>
              <button
                className={`px-3 py-1 rounded text-sm ${
                  flags[currentQ.id] ? "bg-yellow-400" : "bg-gray-200"
                }`}
                onClick={() => toggleFlag(currentQ.id)}
              >
                {flags[currentQ.id] ? "⚑ Flagged" : "⚐ Flag"}
              </button>
            </div>

            <div className="space-y-2">
              {currentQ.options.map((opt, i) => (
                <div key={i}>
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name={`q-${currentQ.id}`}
                      value={opt}
                      checked={answers[currentQ.id] === opt}
                      onChange={() => handleOptionSelect(currentQ.id, opt)}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ⬅️➡️ Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            disabled={current === 0}
            onClick={() => setCurrent((prev) => prev - 1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded disabled:opacity-60"
          >
            ⬅ Previous
          </button>
          <button
            disabled={current === questions.length - 1}
            onClick={() => setCurrent((prev) => prev + 1)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded disabled:opacity-60"
          >
            Next ➡
          </button>
        </div>
      </div>

      {/* 📌 Sidebar - Question Navigator */}
      <div className="w-64 p-4 bg-white shadow-inner border-l border-gray-200">
        <h3 className="text-md font-semibold mb-3 text-gray-700">
          Question Navigator
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {questions.map((q, index) => (
            <button
              key={q.id}
              className={`w-10 h-10 rounded-full text-sm font-medium border 
                ${
                  index === current
                    ? "bg-cyan-500 text-white"
                    : answers[q.id]
                    ? "bg-green-400 text-white"
                    : flags[q.id]
                    ? "bg-yellow-300"
                    : "bg-gray-200"
                }`}
              onClick={() => setCurrent(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* 🔍 Legend */}
        <div className="mt-6 text-xs text-gray-500 space-y-1">
          <div>
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
            Answered
          </div>
          <div>
            <span className="inline-block w-3 h-3 bg-yellow-300 rounded-full mr-2"></span>
            Flagged
          </div>
          <div>
            <span className="inline-block w-3 h-3 bg-gray-200 rounded-full mr-2"></span>
            Not Visited
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
