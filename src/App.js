import React from "react";
import Homepage from "./Home/Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Overall from "./Analysis/pages/Overall";
import GlobalStyles from "./GlobalStyles";
import PageNotFound from "./Analysis/pages/PageNotFound";
import DashboardLogin from "./Analysis/pages/DashboardLogin";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dashboard" element={<DashboardLogin />} />
        <Route path="/dashboard/:name" element={<Overall />} />
      </Routes>
    </div>
  );
}

export default App;
