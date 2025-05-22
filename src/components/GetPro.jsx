import React from "react";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid"; // Using solid icons

const plans = [
  {
    id: "monthly", // Added id for key and potentially other uses
    name: "Monthly Pro",
    duration: "30 Days",
    price: "₹199",
    priceNumeric: 199, // For potential calculations or sorting
    features: [
      "Access to all mock tests",
      "Detailed solutions",
      "Basic performance analytics",
    ],
    ctaText: "Start Monthly",
  },
  {
    id: "quarterly",
    name: "Quarterly Pro",
    duration: "90 Days",
    price: "₹499",
    priceNumeric: 499,
    features: ["All Monthly features", "Extra practice sets", "Email support"],
    ctaText: "Go Quarterly",
  },
  {
    id: "yearly",
    name: "Yearly Pro",
    duration: "365 Days",
    price: "₹1499",
    priceNumeric: 1499,
    features: [
      "All Quarterly features",
      "1-on-1 doubt sessions",
      "Priority test access",
      "Dedicated success manager", // Added one more feature for the best plan
    ],
    best: true,
    ctaText: "Choose Yearly",
  },
];

const GetPro = () => {
  const handleSubscribe = (planName) => {
    alert(`You selected the ${planName} plan.`);
    // Here you can integrate Razorpay or redirect to payment
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-slate-50 to-teal-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-700 dark:text-cyan-300 mb-4 tracking-tight">
            Upgrade to Pro Membership
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Unlock premium features, full-length test series, advanced
            analytics, and personalized support to supercharge your preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {" "}
          {/* items-stretch for equal height cards */}
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-xl border dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                ${
                  plan.best
                    ? "bg-white dark:bg-gray-800 ring-4 ring-cyan-500 dark:ring-cyan-400 scale-100 lg:scale-105" // Slightly more emphasis on best plan
                    : "bg-white dark:bg-gray-800/80"
                }`}
            >
              {plan.best && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 sm:mt-0 sm:mr-0 sm:top-4 sm:right-4 z-10">
                  <div className="flex items-center justify-center bg-cyan-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    <StarIcon className="w-4 h-4 mr-1.5" />
                    Best Value
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex-grow">
                {" "}
                {/* flex-grow to push button to bottom */}
                <h3 className="text-2xl font-semibold text-teal-700 dark:text-teal-300 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-1 text-sm">
                  {plan.duration} Access
                </p>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-6">
                  {plan.price}
                  {plan.id !== "monthly" && (
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                      {plan.id === "quarterly"
                        ? ` (≈₹${Math.round(plan.priceNumeric / 3)}/mo)`
                        : ` (≈₹${Math.round(plan.priceNumeric / 12)}/mo)`}
                    </span>
                  )}
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                {" "}
                {/* Separate padding for button area */}
                <button
                  onClick={() => handleSubscribe(plan.name)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out transform hover:scale-105
                    ${
                      plan.best
                        ? "bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 shadow-md hover:shadow-lg"
                        : "bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700"
                    }`}
                >
                  {plan.ctaText || `Get ${plan.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Need help choosing a plan?{" "}
            <a
              href="/contact"
              className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
            >
              Contact Support
            </a>
            .
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            All prices are inclusive of applicable taxes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetPro;
