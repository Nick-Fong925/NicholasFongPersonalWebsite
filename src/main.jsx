import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "../src/pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Routes>
      <Route path="/NicholasFongPersonalWebsite/*" element={<Landing />} />
      <Route path="/" element={<Landing />} />
      </Routes>
    </React.StrictMode>
  </Router>
);
