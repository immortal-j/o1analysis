import React from "react";
import Homepage from "./Home/Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import  Overall  from "./Analysis/pages/Overall";
import GlobalStyles from "./GlobalStyles";
function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Overall />} />
        <Route path="/dashboard/:id" element={<Overall />} />
      </Routes>
    </div>
  );
}

export default App;
