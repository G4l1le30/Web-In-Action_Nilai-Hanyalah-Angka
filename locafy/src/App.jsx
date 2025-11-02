import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StoreDetailPage from "./pages/StoreDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/store/:id" element={<StoreDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
