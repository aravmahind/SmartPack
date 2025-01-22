import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home"; 
import Planner from "./pages/Planner";

const AppRouter = () => {
  return (
    <Router>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;