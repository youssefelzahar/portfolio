import React, { useState } from 'react';
import ProjectsManager from './ProjectsManager';
import ExperienceManager from './ExperienceManager';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="dashboard-container">
      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button 
          className={`tab-button ${activeTab === 'experiences' ? 'active' : ''}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
      </div>
      <div className="dashboard-content">
        {activeTab === 'projects' ? <ProjectsManager /> : <ExperienceManager />}
      </div>
    </div>
  );
};

export default Dashboard;