import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from "../assets/ChatGPT Image Aug 16, 2025, 10_01_18 AM.png"; // adjust path if needed

const Home = () => {
  useEffect(() => {
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
    
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="home-container">
      <div>
         <img src={logo} alt="Logo" className="home-logo" loading="lazy" />
      <h1>Welcome to My Portfolio</h1>
      </div>
    
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Youssef Elzahar</h1>
        <p>Full Stack Data Scientist | Building AI models and Software for it</p>
        <div>
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card" data-aos="fade-up">
            <h3>AI Model Deployment</h3>
            <p>End-to-end machine learning pipeline with real-time inference capabilities.</p>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Data Visualization Dashboard</h3>
            <p>Interactive analytics platform for complex datasets with real-time updates.</p>
          </div>
          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Full Stack Web Application</h3>
            <p>Scalable web solution with modern architecture and cloud integration.</p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <img 
          src={logo} 
          alt="Youssef Elzahar" 
          className="about-photo"
          loading="lazy"
        />
        <h2>About Me</h2>
        <p>
          Passionate Full Stack Data Scientist with expertise in building scalable AI solutions 
          and modern web applications. I combine data science with software engineering to create 
          impactful products that solve real-world problems.
        </p>
      </section>
    </div>
  );
};

export default Home;
