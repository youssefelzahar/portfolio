import React, { useEffect, useState } from "react";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/projects/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="home">
      <h1>My Projects</h1>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              )}
              {project.image_url && <img src={project.image_url} alt={project.title} />}
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <p>
                <strong>Duration:</strong> {project.start_date} - {project.end_date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
