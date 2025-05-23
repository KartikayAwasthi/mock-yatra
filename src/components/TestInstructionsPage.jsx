import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaBookOpen } from "react-icons/fa";

const TEST_INFO = {
  1: {
    title: "📝 UPSC Prelims 2025 Full Mock Test",
    instructions: [
      "📘 The test consists of GS Paper I & II, based on the latest UPSC pattern.",
      "⏱️ Total duration is 2 hours. No extra time will be provided.",
      "✅ Each correct answer carries 2 marks. ❌ 1/3rd negative marking for wrong answers.",
      "🚫 Do not refresh or close the browser window during the test.",
      "⚠️ Use of unfair means will lead to disqualification.",
      "🛑 Submit your answers before the timer ends.",
    ],
  },
  2: {
    title: "📚 SSC CGL Tier 1 Practice Set",
    instructions: [
      "🧮 The test covers all sections of SSC CGL Tier 1.",
      "⏲️ Total duration is 1 hour.",
      "✅ Each correct answer: 2 marks. ❌ Wrong answer: -0.5 marks.",
      "📵 Do not use calculators or mobile phones during the test.",
      "🛑 Submit your answers before the timer ends.",
    ],
  },
  3: {
    title: "🏦 IBPS PO Prelims Mock",
    instructions: [
      "🧾 Covers all sections of the latest IBPS PO Prelims syllabus.",
      "⏰ Duration: 1 hour.",
      "✅ Correct: 1 mark. ❌ Wrong: -0.25 marks.",
      "📵 No calculators or phones allowed.",
      "🛑 Submit your answers before the timer ends.",
    ],
  },
  4: {
    title: "🚂 RRB NTPC CBT 1 Sample Test",
    instructions: [
      "🧠 Includes reasoning, math, and general awareness.",
      "⏱️ Duration: 90 minutes.",
      "✅ Each correct: 1 mark. ❌ Wrong: -1/3rd marks.",
      "📵 No calculators or phones allowed.",
      "🛑 Submit your answers before the timer ends.",
    ],
  },
};

const TestInstructionsPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = TEST_INFO[testId];

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Test Not Found
          </h2>
          <button
            className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
            onClick={() => navigate("/test-series")}
          >
            Go to Test Series
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-100 py-10 px-4 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="flex items-center justify-center text-3xl text-teal-700 font-bold mb-6 gap-2">
          <FaBookOpen className="text-cyan-600" />
          {test.title}
        </div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
          ⚠️ General Instructions
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-[16px] leading-relaxed">
          {test.instructions.map((inst, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              {inst}
            </motion.li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate(`/test/${testId}`)}
            className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Start Test <FaArrowRight />
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition"
          >
            <FaArrowLeft /> Back
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestInstructionsPage;
