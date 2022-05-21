import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Liste from "./pages/liste";
import Resurse from "./pages/resurse";
import Footer from "./components/Footer";
import Istorie from "./pages/istorie";


function App() {

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/resurse" exact element={<Resurse />} />
            <Route path="/liste" exact element={<Liste />} />
            <Route path="/istorie" exact element={<Istorie />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
