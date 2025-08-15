import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DashboardLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        navigate('/dashboard/admin');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-login">
      <h2>Dashboard Login</h2>
      <form onSubmit={handleLogin}>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login to Dashboard'}
        </button>
      </form>
    </div>
  );
};

export default DashboardLogin;