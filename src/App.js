import React from "react";
import Navbar from "./Analysis/components/Navbar";
import Homepage from "./Home/Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import { Overall } from "./Analysis/pages/Overall";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Overall />} />
      </Routes>
    </div>
  );
}

export default App;
