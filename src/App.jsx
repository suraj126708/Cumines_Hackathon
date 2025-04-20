import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PercentileDisplay from "./components/PercentileDisplay";
import NotFound from "./components/NotFound";
import PredictionForm from "./Pages/PredictionForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PercentileDisplay />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/construction" element={<PredictionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
