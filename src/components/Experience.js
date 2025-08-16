import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch('http://localhost:8000/experiences');
      if (!response.ok) {
        throw new Error('Failed to fetch experiences');
      }
      const data = await response.json();
      setExperiences(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString || dateString === 'Present' || dateString === null || dateString === 'null') {
      return 'Present';
    }
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Present';
      }
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      });
    } catch (error) {
      return 'Present';
    }
  };

  if (loading) {
    return <div className="experience-container">Loading experiences...</div>;
  }

  if (error) {
    return <div className="experience-container">Error: {error}</div>;
  }

  return (
    <div className="experience-container">
      <h2 className="experience-title">Professional Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-role">{exp.role}</h3>
              <span className="experience-company">{exp.company}</span>
            </div>
            <div className="experience-meta">
              <span className="experience-duration">
                {formatDate(exp.start_date)} - {formatDate(exp.end_date || 'Present')}
              </span>
              <span className="experience-location">{exp.location}</span>
            </div>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-skills">
              {exp.skills && exp.skills.split(',').map((skill, index) => (
                <span key={index} className="skill-tag">{skill.trim()}</span>
              ))}
            </div>
            {exp.live_url && (
              <a 
                href={exp.live_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="experience-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;