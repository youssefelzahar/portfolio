import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../config/api';

const ProjectForm = ({ onSubmitSuccess, editingProject, setEditingProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title || '');
      setDescription(editingProject.description || '');
      setGithubUrl(editingProject.github_url || '');
      setImageUrl(editingProject.image_url || '');
      setTechnologies(editingProject.technologies || '');
      setStartDate(editingProject.start_date || '');
      setEndDate(editingProject.end_date || '');
    } else {
      setTitle('');
      setDescription('');
      setGithubUrl('');
      setImageUrl('');
      setTechnologies('');
      setStartDate('');
      setEndDate('');
    }
  }, [editingProject]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      description,
      github_url: githubUrl,
      image_url: imageUrl,
      technologies,
      start_date: startDate,
      end_date: endDate,
    };

    const method = editingProject ? 'PUT' : 'POST';
    const url = editingProject
      ? `${API_ENDPOINTS.projects}/${editingProject.id}`
      : API_ENDPOINTS.projects;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    onSubmitSuccess();
    setEditingProject(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} placeholder="GitHub URL" />
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <input value={technologies} onChange={(e) => setTechnologies(e.target.value)} placeholder="Technologies" />
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      
      <button type="submit">{editingProject ? 'Update' : 'Add'} Project</button>
      {editingProject && <button type="button" onClick={() => setEditingProject(null)}>Cancel</button>}
    </form>
  );
};

export default ProjectForm;
