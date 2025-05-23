import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setApiMessage("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email.includes("@") || !formData.email.includes(".com"))
      newErrors.email = "Invalid email format";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      name: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
    };
    // Log payload to console before sending
    console.log("📤 Sending signup data to backend:", payload);

    try {
      const res = await axios.post(
        "http://localhost:8080/auth/signup",
        payload
      );
      setApiMessage(res.data.message || "Signup successful!");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      const message =
        err.response?.data?.message || "Signup failed. Please try again.";
      setApiMessage(message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-12">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 md:w-1/2">
        <h2 className="text-3xl font-bold text-center text-orange-700 dark:text-orange-300 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {["fullName", "email", "mobile", "password", "confirmPassword"].map(
            (field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {field === "confirmPassword"
                    ? "Confirm Password"
                    : field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-orange-400 focus:outline-none"
                />
                {errors[field] && (
                  <p className="text-red-600 text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            )
          )}

          {apiMessage && (
            <p
              className={`text-sm text-center ${
                apiMessage.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {apiMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
