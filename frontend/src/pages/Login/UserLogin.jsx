import React, { useState } from "react";
import { LogIn, Lock, Mail, Chrome } from "lucide-react";
import { useNavigate } from "react-router";

// Assuming logo is available from assets
import Logo from "./../../assets/cpb.jpg";
import './../../index.css'

const UserLogin = () => {

    const navigate = useNavigate();

  // Component name is UserLogin
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!credentials.email || !credentials.password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    // --- Placeholder for API Call to Express Backend ---
    console.log("Attempting standard login with:", credentials);

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      const success = true; // Replace with actual API response check
      if (success) {
        // SUCCESS: Store JWT token, redirect to /admin/dashboard
        console.log("Login successful! Redirecting...");
      } else {
        setError("Login failed. Check your credentials.");
      }
    }, 1500);
  };

  const handleGoogleLogin = () => {
    // --- Placeholder for Google OAuth/Firebase Auth Logic ---
    setError("");
    console.log("Initiating Google Sign-in...");
    // NOTE: We replace alert() with console.log as alerts are discouraged in iframes
    console.log("Google Login initiated. (Requires backend OAuth setup)");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-4">
          {/* Brand Logo */}
          <img className="h-16 w-auto" src={Logo} alt="CPB Logo" />
        </div>
        {/* Text remains 'Admin Account' for co-founder access */}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-900">
          Access the CPB Dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border-t-4 border-red-500 ">
          {/* Google Login Button (Social Sign-in) */}
          <button
            onClick={handleGoogleLogin}
            className="w-full cursor-pointer flex justify-center items-center py-2 px-4 border-2 border-red-500 rounded-md shadow-sm text-sm font-medium text-black hover:bg-base-200 transition duration-150 mb-6"
            disabled={loading}
          >
            <Chrome className="w-5 h-5 mr-3 text-red-500" />
            Sign in with Google
          </button>

          {/* Separator */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="loginspan px-2 bg-white">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
            {/* Error Display */}
            {error && (
              <div
                className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-md relative text-sm"
                role="alert"
              >
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 loginspan"
              >
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={credentials.email}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 hover:shadow-red-500 hover:shadow-md sm:text-sm"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 loginspan"
              >
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 hover:shadow-red-500 hover:shadow-md sm:text-sm"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full cursor-pointer flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <LogIn className="h-5 w-5 mr-2 " />
                    Sign In
                  </>
                )}
              </button>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm loginspan">
                Don't have an account?
                <button
                  type="button"
                  onClick={() => navigate("/user/register")}
                  className="ml-1 font-medium text-red-600! hover:text-red-700 cursor-pointer"
                >
                  Create an account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
