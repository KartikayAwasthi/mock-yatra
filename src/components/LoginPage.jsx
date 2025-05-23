import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [identifierError, setIdentifierError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");

  const validateIdentifier = (value) => {
    // Mobile: only digits, length 10
    if (/^\d+$/.test(value)) {
      if (value.length > 10)
        return "Mobile number should not be more than 10 digits";
      if (value.length < 10) return "Mobile number should be 10 digits";
      return "";
    }
    // Email: must include @ and .com
    if (!value.includes("@") || !value.includes(".com")) {
      return "Email should include '@' and '.com'";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (value.length < 8) return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(value))
      return "Password must include at least 1 uppercase letter";
    if (!/[a-z]/.test(value))
      return "Password must include at least 1 lowercase letter";
    if (!/[0-9]/.test(value)) return "Password must include at least 1 number";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
      return "Password must include at least 1 special character";
    return "";
  };

  const handleIdentifierChange = (e) => {
    const value = e.target.value;
    setIdentifier(value);
    setIdentifierError(validateIdentifier(value));
    setApiError("");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
    setApiError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idError = validateIdentifier(identifier);
    const pwError = validatePassword(password);
    console.log("Form data before sending:", { identifier, password });

    setIdentifierError(idError);
    setPasswordError(pwError);

    if (!idError && !pwError) {
      try {
        const response = await axios.post("http://localhost:8080/auth/login", {
          username: identifier,
          password: password,
        });

        const { token, username, roles } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("roles", JSON.stringify(roles));

        // Redirect to dashboard or home
        window.location.href = "/dashboard";
      } catch (error) {
        const message =
          error.response?.data?.message ||
          "Login failed. Please check your credentials.";
        setApiError(message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Student Login
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="identifier"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email address or Mobile number
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={handleIdentifierChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
            {identifierError && (
              <p className="text-red-600 text-xs mt-1">{identifierError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-cyan-600 focus:outline-none"
            />
            {passwordError && (
              <p className="text-red-600 text-xs mt-1">{passwordError}</p>
            )}
          </div>

          {apiError && (
            <p className="text-red-500 text-sm text-center">{apiError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-teal-300 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
