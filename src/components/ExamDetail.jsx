import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const detailedExamData = {
  "UPSC Civil Services": {
    heading: "UPSC Civil Services Examination 2025",
    sections: [
      {
        title: "Prelims Exam Pattern",
        details: [
          "Paper 1: General Studies (GS) – 100 Questions – 200 Marks – 2 Hours – 1/3rd Negative Marking",
          "Paper 2: CSAT (Qualifying) – 80 Questions – 200 Marks – 2 Hours – 1/3rd Negative Marking – Qualifying Marks: 33%",
        ],
      },
      {
        title: "Mains Exam Pattern",
        details: [
          "Paper A (Indian Language) – 300 Marks",
          "Paper B (English) – 300 Marks",
          "Essay – 250 Marks",
          "General Studies I-IV – 250 Marks each",
          "Optional Subject Papers I & II – 250 Marks each",
          "Total for Merit Ranking – 1750 Marks",
          "Duration: 3 Hours per paper",
        ],
      },
      {
        title: "Interview",
        details: [
          "Personality Test – 275 Marks",
          "Final Merit – 2025 Marks (Mains + Interview)",
        ],
      },
    ],
  },
  "SSC Exams": {
    heading: "SSC Combined Graduate Level (CGL) Examination 2025",
    sections: [
      {
        title: "Tier 1: Preliminary Exam",
        details: [
          "General Intelligence & Reasoning – 25 Qs – 50 Marks",
          "General Awareness – 25 Qs – 50 Marks",
          "Quantitative Aptitude – 25 Qs – 50 Marks",
          "English Comprehension – 25 Qs – 50 Marks",
          "Total: 100 Qs – 200 Marks – 60 Minutes",
          "Negative Marking: 0.5 per wrong answer",
        ],
      },
      {
        title: "Tier 2: Main Exam",
        details: [
          "Paper I: Quantitative Abilities & Reasoning (Compulsory) – 300 Marks",
          "Paper II: English Language & Comprehension – 200 Marks",
          "Paper III & IV: For specific posts only",
          "Negative Marking: 1 mark for each wrong answer in Paper-I & 0.25 in Paper-II",
        ],
      },
      {
        title: "Tier 3 & 4",
        details: [
          "Tier 3: Descriptive Paper (Essay/Letter) – 100 Marks",
          "Tier 4: Computer Proficiency/Data Entry Skill Test – Qualifying",
        ],
      },
    ],
  },
  "Banking & Insurance": {
    heading: "IBPS/SBI Banking & Insurance Exams 2025",
    sections: [
      {
        title: "Prelims Exam",
        details: [
          "English Language – 30 Qs – 30 Marks",
          "Quantitative Aptitude – 35 Qs – 35 Marks",
          "Reasoning Ability – 35 Qs – 35 Marks",
          "Total: 100 Qs – 100 Marks – 60 Minutes",
          "Negative Marking: 0.25 per wrong answer",
        ],
      },
      {
        title: "Mains Exam",
        details: [
          "Reasoning & Computer Aptitude – 45 Qs – 60 Marks",
          "General/Economy/Banking Awareness – 40 Qs – 40 Marks",
          "English Language – 35 Qs – 40 Marks",
          "Data Analysis & Interpretation – 35 Qs – 60 Marks",
          "Descriptive Test (Letter & Essay) – 2 Qs – 25 Marks",
          "Total Duration: 3 Hours + 30 Mins (Descriptive)",
        ],
      },
      {
        title: "Interview",
        details: [
          "Interview – 100 Marks",
          "Final Merit: Mains (80%) + Interview (20%)",
        ],
      },
    ],
  },
  "Railway Recruitment": {
    heading: "RRB NTPC & Technical Exams 2025",
    sections: [
      {
        title: "CBT Stage 1",
        details: [
          "General Awareness – 40 Qs – 40 Marks",
          "Mathematics – 30 Qs – 30 Marks",
          "General Intelligence & Reasoning – 30 Qs – 30 Marks",
          "Total: 100 Qs – 100 Marks – 90 Minutes",
        ],
      },
      {
        title: "CBT Stage 2",
        details: [
          "General Awareness – 50 Qs – 50 Marks",
          "Mathematics – 35 Qs – 35 Marks",
          "General Intelligence & Reasoning – 35 Qs – 35 Marks",
          "Total: 120 Qs – 120 Marks – 90 Minutes",
        ],
      },
      {
        title: "Skill/Typing Test & Document Verification",
        details: [
          "Qualifying in nature",
          "Final Selection based on CBT 2 marks only",
        ],
      },
    ],
  },
  "Defense & Police": {
    heading: "Defense & Police Services Exams (NDA, CDS, CAPF) 2025",
    sections: [
      {
        title: "Written Exam",
        details: [
          "NDA: Mathematics – 120 Qs – 300 Marks; General Ability – 150 Qs – 600 Marks",
          "CDS: English, General Knowledge, Mathematics – Each 100 Marks",
          "CAPF: Paper 1 – General Ability – 250 Marks; Paper 2 – Essay – 200 Marks",
        ],
      },
      {
        title: "SSB Interview / PET",
        details: [
          "NDA/CDS: SSB Interview – 900 Marks",
          "CAPF: PET + Interview – 150 Marks",
          "Includes Psychological Test, Group Task, Conference Round",
        ],
      },
    ],
  },
  "State PSCs": {
    heading: "State Public Service Commission Exams 2025",
    sections: [
      {
        title: "Prelims Exam",
        details: [
          "Generally 2 papers – GS Paper 1 & CSAT",
          "Each Paper – 200 Marks – Objective Type",
          "Qualifying CSAT & Merit-based GS",
        ],
      },
      {
        title: "Mains Exam",
        details: [
          "Multiple descriptive papers (GS, Essay, Language, Optional)",
          "Total Marks range between 1200-2000 depending on state",
        ],
      },
      {
        title: "Interview",
        details: [
          "Interview Marks: 100–200 (State-wise variation)",
          "Final Merit: Mains + Interview",
        ],
      },
    ],
  },
};

const ExamDetail = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const exam = detailedExamData[decodeURIComponent(examId)];

  if (!exam) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-2xl font-bold mb-4">Exam Not Found</h2>
          <button
            className="bg-cyan-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-cyan-700 mb-6">
          {exam.heading}
        </h1>
        {exam.sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        <button
          className="mt-6 bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ExamDetail;
