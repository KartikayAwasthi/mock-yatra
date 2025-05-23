import React from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, Clock4, Languages, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TEST_SERIES = [
  {
    id: 1,
    title: "UPSC Prelims 2025 Full Mock Test",
    exam: "UPSC Civil Services",
    description:
      "Comprehensive mock test covering GS Paper I & II. Based on latest UPSC pattern.",
    totalMarks: 400,
    duration: "2 hours",
    language: "English & Hindi",
  },
  {
    id: 2,
    title: "SSC CGL Tier 1 Practice Set",
    exam: "SSC Exams",
    description: "Practice set for SSC CGL Tier 1 with detailed solutions.",
    totalMarks: 200,
    duration: "1 hour",
    language: "English & Hindi",
  },
  {
    id: 3,
    title: "IBPS PO Prelims Mock",
    exam: "Banking & Insurance",
    description:
      "Mock test for IBPS PO Prelims. Covers all sections as per latest syllabus.",
    totalMarks: 100,
    duration: "1 hour",
    language: "English",
  },
  {
    id: 4,
    title: "RRB NTPC CBT 1 Sample Test",
    exam: "Railway Recruitment",
    description:
      "Sample test for RRB NTPC CBT 1. Includes reasoning, math, and general awareness.",
    totalMarks: 100,
    duration: "90 minutes",
    language: "English & Hindi",
  },
];

const TestSeriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-100 py-12 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-teal-800 mb-12 text-center flex items-center justify-center gap-2"
      >
        <GraduationCap className="w-8 h-8 text-orange-500" /> Test Series 📚
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {TEST_SERIES.map((test, index) => (
          <motion.div
            key={test.id}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="mb-3 text-xs font-semibold text-teal-600 uppercase tracking-wider">
              {test.exam}
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {test.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{test.description}</p>

            <div className="space-y-1 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <BookOpenCheck className="w-4 h-4 text-cyan-500" /> Marks:{" "}
                {test.totalMarks}
              </div>
              <div className="flex items-center gap-2">
                <Clock4 className="w-4 h-4 text-orange-500" /> Duration:{" "}
                {test.duration}
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-green-600" /> Language:{" "}
                {test.language}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:from-teal-600 hover:to-cyan-700 transition duration-300"
              onClick={() => navigate(`/test-instructions/${test.id}`)}
            >
              🚀 Start Test
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestSeriesPage;
