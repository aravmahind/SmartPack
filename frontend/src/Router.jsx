import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; 
import Home from "./pages/Home"; 
import Analytics from "./pages/Analytics";

import Insights from "./pages/Insights";
import Preloader from "./components/Preloader";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
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
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;