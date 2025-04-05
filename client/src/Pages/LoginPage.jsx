/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Authorisation/AuthProvider";
import { handleError, handleSuccess } from "../utils";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { login, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    try {
      const res = await fetch(
        "https://termsheet-validation-api.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        handleError(data.message || "Login failed");
        return;
      }

      handleSuccess("Login successful!");
      login(data.token); // pass only token
      navigate("/");
    } catch (err) {
      handleError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="bg-slate-50 bg-opacity-60 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent shadow border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-transparent shadow border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-black">
            Dont have an account?{" "}
            <Link to="/register" className="text-blue-700">
              Sign Up
            </Link>
          </p>
        </div>
        {/* Demo user credentials block aligned to left */}
        <div className="mt-4 text-left text-sm text-gray-600 border border-gray-300 rounded p-3 bg-gray-100">
          <p className="font-semibold">Demo User Login:</p>
          <p>
            <span className="font-mono">ID: 1234</span>
          </p>
          <p>
            <span className="font-mono">Password: 1234</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
