import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsManager from './ProjectsManager';
import ExperienceManager from './ExperienceManager';
import './Dashboard.css'; // لو عندك ستايلات

const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("projects");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/dashboard"); // لو مفيش توكن يرجع لل login
      return;
    }

    fetch("http://localhost:8000/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        localStorage.removeItem("token");
        navigate("/dashboard"); // يرجع لل login
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/dashboard");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div className="dashboard-admin">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="dashboard-tabs">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={activeTab === "experiences" ? "active" : ""}
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === "projects" ? <ProjectsManager /> : <ExperienceManager />}
      </div>
    </div>
  );
};

export default DashboardAdmin;
