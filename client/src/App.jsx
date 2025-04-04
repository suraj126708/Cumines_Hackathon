/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import HeroPage from "./Pages/HeroPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProtectedRoute from "./Authorisation/ProtectedRoute";
import { AuthProvider } from "./Authorisation/AuthProvider";
import NavBar from "./components/Navbar";
import PricingPage from "./Pages/PricingPage";
import BlogTemplate from "./Pages/BlogPage";
// import BlogTemplate from "./Pages/BlogPage";
// import Destination from "./Pages/DestinationPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <NavBar id="black" />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/destination" element={<Destination />} /> */}
            <Route path="/blog" element={<BlogTemplate />} />

            <Route path="/pricing" element={<PricingPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HeroPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
