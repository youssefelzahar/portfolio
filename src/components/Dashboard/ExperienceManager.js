import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm';

const ExperienceManager = () => {
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch('http://localhost:8000/experiences');
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      try {
        await fetch(`http://localhost:8000/experiences/${id}`, {
          method: 'DELETE',
        });
        fetchExperiences();
      } catch (error) {
        console.error('Error deleting experience:', error);
      }
    }
  };

  return (
    <div className="experiences-manager">
      <h2>Manage Experiences</h2>
      <ExperienceForm 
        onSubmitSuccess={fetchExperiences}
        editingExperience={editingExperience}
        setEditingExperience={setEditingExperience}
      />
      <div className="experiences-list">
        {experiences.map(experience => (
          <div key={experience.id} className="experience-item">
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <div className="experience-actions">
              <button onClick={() => setEditingExperience(experience)}>Edit</button>
              <button onClick={() => handleDelete(experience.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceManager;