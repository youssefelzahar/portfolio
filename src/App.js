import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

import DashboardLogin from './components/Dashboard/DashboardLogin';
import DashboardAdmin from './components/Dashboard/DashboardAdmin';
import Experience from './components/Experience';
import ContactBar from './components/ContactBar';
import logo from "./assets/ChatGPT Image Aug 16, 2025, 10_01_18 AM.png"; // adjust path if needed

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-menu">
           <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/dashboard" element={<DashboardLogin />} />
            <Route path="/dashboard/admin" element={<DashboardAdmin />} />

          </Routes>
                      <ContactBar /> {/* Always visible */}

        </main>
      </div>
    </Router>
  );
}

export default App;
