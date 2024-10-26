import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";

import "./stylesheets/app.scss";
import Authentication from "./pages/Authentication.jsx";
import Article from "./pages/Article.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route
          path="/parts/:partNumber/articles/:articleNumber"
          element={<Article />}
        />
      </Routes>
    </Router>
  );
};

export default App;
