import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouter import edilmesi gerekiyor

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ThemeProvider from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        {" "}
        {/* Uygulamayı Router ile sarmalıyoruz */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
