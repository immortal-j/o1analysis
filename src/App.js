import React from "react";
import Homepage from "./Home/Pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Overall from "./Analysis/pages/Overall";
import GlobalStyles from "./GlobalStyles";
import PageNotFound from "./Analysis/pages/PageNotFound";
import DashboardLogin from "./Analysis/pages/DashboardLogin";
import Overall2 from "./Analysis/pages/Overall copy";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dashboard" element={<Overall2 />} />
        <Route path="/dashboard/:email" element={<Overall />} />
      </Routes>
    </div>
  );
}

export default App;
