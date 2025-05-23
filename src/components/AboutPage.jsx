import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { CalendarCheck, Rocket, Smartphone, Award } from "lucide-react";
import {
  faLightbulb,
  faBookOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100">
    {/* Hero Section */}
    <section className="w-full py-20 px-6 text-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-5xl font-extrabold text-teal-600 dark:text-teal-300 mb-4">
        Empowering Aspirants with Mock Yatra
      </h1>
      <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        Your trusted platform for preparing competitive exams with accuracy,
        strategy, and confidence.
      </p>
    </section>

    {/* Vision, Offerings, Team Summary */}
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 w-16 h-16 flex items-center justify-center rounded-full">
              <FontAwesomeIcon icon={faLightbulb} className="text-2xl" />
            </span>
          </div>
          <h2 className="text-2xl font-bold text-center mb-3">Our Vision</h2>
          <p className="text-center">
            To make exam preparation more accessible, data-driven, and enjoyable
            for every learner in India.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <span className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 w-16 h-16 flex items-center justify-center rounded-full">
              <FontAwesomeIcon icon={faBookOpen} className="text-2xl" />
            </span>
          </div>
          <h2 className="text-2xl font-bold text-center mb-3">What We Offer</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-xs text-gray-700 dark:text-gray-300">
            <li>Mock tests for UPSC, SSC, Banking & more</li>
            <li>Detailed explanations and analytics</li>
            <li>Customized study plans</li>
            <li>AI-driven performance tracking</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
          <div className="mb-4 flex justify-center">
            <span className="bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 w-16 h-16 flex items-center justify-center rounded-full">
              <FontAwesomeIcon icon={faUsers} className="text-2xl" />
            </span>
          </div>
          <h2 className="text-2xl font-bold text-center mb-3">Our Team</h2>
          <p className="text-center">
            Educators, technologists, and toppers working together to deliver
            excellence to every aspirant.
          </p>
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center text-teal-600 dark:text-teal-300 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Milestones
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="border-l-4 border-teal-500 absolute h-full left-8 top-0"></div>

        {[
          {
            year: "2021",
            title: "Idea Conception",
            text: "Mock Yatra was conceptualized to simplify government exam preparation.",
            icon: <CalendarCheck className="text-white w-5 h-5" />,
          },
          {
            year: "2022",
            title: "Platform Launch",
            text: "We launched our web platform and reached 10,000 users in 6 months.",
            icon: <Rocket className="text-white w-5 h-5" />,
          },
          {
            year: "2023",
            title: "Mobile App Release",
            text: "Introduced Android app with mock test features and performance tracking.",
            icon: <Smartphone className="text-white w-5 h-5" />,
          },
          {
            year: "2024",
            title: "1 Million Tests",
            text: "Achieved major milestone with over 1 million test submissions.",
            icon: <Award className="text-white w-5 h-5" />,
          },
        ].map((event, idx) => (
          <motion.div
            key={idx}
            className="mb-12 ml-20 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="absolute -left-8 top-0 bg-teal-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
              {event.icon}
            </div>
            <h3 className="text-xl font-semibold text-teal-700 dark:text-teal-300 mb-1">
              {event.year} - {event.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{event.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Team Members Section */}
    <section className="py-16 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-300 mb-12">
        Meet Our Team
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          { name: "Anjali Sharma", role: "Founder & CEO" },
          { name: "Ravi Kumar", role: "CTO" },
          { name: "Sonal Verma", role: "Content Head" },
          { name: "Aditya Joshi", role: "Product Manager" },
        ].map((member, idx) => (
          <div key={idx} className="text-center">
            <img
              src={`https://i.pravatar.cc/150?img=${idx + 10}`}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 shadow-md"
            />
            <h4 className="text-lg font-semibold">{member.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Partners Section */}
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-300 mb-12">
        Our Partners
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5].map((logo) => (
          <img
            key={logo}
            src={`https://dummyimage.com/150x80/ccc/000&text=Partner+${logo}`}
            alt={`Partner ${logo}`}
            className="h-20 object-contain bg-white p-2 rounded shadow"
          />
        ))}
      </div>
    </section>

    {/* Contact CTA */}
    <section className="bg-gradient-to-br from-teal-500 to-cyan-500 text-white py-12 px-6 text-center rounded-t-3xl">
      <h3 className="text-2xl font-semibold mb-2">Have Questions?</h3>
      <p className="mb-4">
        We're here to help. Contact us at{" "}
        <a
          href="mailto:support@mockyatra.com"
          className="underline hover:text-gray-200"
        >
          support@mockyatra.com
        </a>
      </p>
    </section>
  </div>
);

export default AboutPage;
