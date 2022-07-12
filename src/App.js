import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import Homepage from "./Home/Pages/Homepage";
import PageNotFound from "./Analysis/pages/PageNotFound";
import Overall2 from "./Analysis/pages/OverallUsingLogin";
import Overall from "./Analysis/pages/OverallUsingURL";
// import DashboardLogin from "./Analysis/pages/DashboardLogin";

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
