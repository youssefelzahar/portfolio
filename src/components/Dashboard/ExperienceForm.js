import React, { useState, useEffect } from 'react';

const ExperienceForm = ({ onSubmitSuccess, editingExperience, setEditingExperience }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (editingExperience) {
      setTitle(editingExperience.title || '');
      setCompany(editingExperience.company || '');
      setDescription(editingExperience.description || '');
      setStartDate(editingExperience.start_date || '');
      setEndDate(editingExperience.end_date || '');
    } else {
      setTitle('');
      setCompany('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    }
  }, [editingExperience]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingExperience ? 'PUT' : 'POST';
    const url = editingExperience
      ? `http://localhost:8000/experiences/${editingExperience.id}`
      : 'http://localhost:8000/experiences/';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          company,
          description,
          start_date: startDate,
          end_date: endDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save experience');
      }

      onSubmitSuccess();
      setEditingExperience(null);
      setTitle('');
      setCompany('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      console.error('Error saving experience:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button type="submit">
        {editingExperience ? 'Update' : 'Add'} Experience
      </button>
      {editingExperience && (
        <button type="button" onClick={() => setEditingExperience(null)}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ExperienceForm;
