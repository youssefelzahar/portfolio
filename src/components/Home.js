import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from "../assets/ChatGPT Image Aug 16, 2025, 10_01_18 AM.png"; // adjust path if needed


const Home = () => {
  return (
    <div className="home-container">
      <div>
         <img src={logo} alt="Logo" className="home-logo" />
      <h1>Welcome to My Portfolio</h1>
      </div>
    
      {/* Hero Section */}

      <section className="hero-section">
        <h1>Youssef Elzahar</h1>
        <p>Full Stack Data scientist| building AI models and Software for it</p>
        <div>
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>Short description of project one.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Short description of project two.</p>
          </div>
          <div className="project-card">
            <h3>Project Three</h3>
            <p>Short description of project three.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
