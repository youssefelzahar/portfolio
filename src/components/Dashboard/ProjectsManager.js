import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import { API_ENDPOINTS } from '../../config/api';

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.projects);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await fetch(`${API_ENDPOINTS.projects}/${id}`, { method: 'DELETE' });
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  return (
    <div className="projects-manager">
      <h2>Manage Projects</h2>
      <ProjectForm 
        onSubmitSuccess={fetchProjects}
        editingProject={editingProject}
        setEditingProject={setEditingProject}
      />
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p><strong>GitHub:</strong> <a href={project.github_url} target="_blank" rel="noreferrer">{project.github_url}</a></p>
            {project.image_url && <img src={project.image_url} alt={project.title} width="150" />}
            <p><strong>Start Date:</strong> {project.start_date}</p>
            <p><strong>End Date:</strong> {project.end_date}</p>
            <div className="project-actions">
              <button onClick={() => setEditingProject(project)}>Edit</button>
              <button onClick={() => handleDelete(project.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsManager;
