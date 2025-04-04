/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HeroPage from "./Pages/HeroPage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <NavBar id="black" />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
